---
title: Chap 6 · Gestion de la mémoire
attachments: [Clipboard_2022-11-28-10-10-48.png, Clipboard_2022-11-28-10-32-02.png, Clipboard_2022-11-28-11-00-57.png, Clipboard_2022-12-03-22-54-38.png, Clipboard_2022-12-03-23-19-41.png]
tags: [info]
created: 2022-11-28T09:09:49.171Z
modified: 2022-12-05T09:24:50.003Z
---

# Chap 6 &middot; Gestion de la mémoire 

[[@toc]]

## I. Organisation de la mémoire
Par ordre croissant de taille, et décroissant de rapidité:
* Registes: quelques octets
* Mémoire cache (L1, L2, L3): quelques Mo
* RAM: quelques Go
* Stockage de masse: SSD, disque dur

Un exécutable ne va pas s'occuper de ces différentes niveaux de mémoire (il peut travailler directement avec les registres ou laisser le processeur et le système d'exploitation s'occuper du reste).

Le processus (le programme qui s'execute) va travailler avec une **mémoire virtuelle**.

```py
																												v algo compliqué
Processus --- voit seulement --> [mémoire virtuelle] <---> [mémoire physique]
																	^^^ 1 par processus       ^^^ partagé par
																																tous les processus
```

Chaque processus fait comme s'il était tout seul en mémoire:
* Plus simple à gérer
* Plus sécurisé

La mémoire virtuelle est vituellement gigantesque. Le processus va écrire les données qu'il utilise à différents endroits de cette mémoire (endroits repérés par leur adresse = 1 entier $\in \llbracket 0, 2^{47}-1 \rrbracket$, soit environ 64 To d'espace) et le système va s'occuper de relier des adresses virtuelles utiles à des adresses physiques (bcp d'adresses ne sont donc reliées à rien)

Que trouve-t-on dans la mémoire virtuelle virtuelle d'un processus ?

```py
Grandes adresses	+-----------------------+
									|			    Pile    			|
								  |~~~~~~~~~~~~~~~~~~~~~~~|
									|   v   v   v   v   v   |
									| 											| 
									| 		 (inutilisé) 			| <- théoriquement très grand
									| 											| 
									| 				 ...					| 
									| 		  								| 
									|   ^   ^   ^   ^   ^   |
								  |~~~~~~~~~~~~~~~~~~~~~~~|
									|          Tas 				  |
									+-----------------------+
									|        Données				|
									|       statiques				|
									| (variables globales)  |
									| .data .bbs .rodata	  |
									+-----------------------+
									|          Code				  |
									|         .text	  	    |
Petites adresses  +-----------------------+
```

## II. La pile d'appels
La pile d'appels est une structure constituéer de blocs d'activation *(stack frames)*

À tout moment, il y a un bloc d'activation sur la pile pour chaque appel de la fonction active (débuté, mais pas encore terminé). Chaque bloc contient les variables localese vivantes de la fonction, ainsi que des informations permettant de continuer l'execution du programme une fois l'appel terminé.

**Principe:**
```c
int g(int n) {
	return n*n;
}

int f(int n) {
	int s = 0;
	int k = 1;
	while (k < n+1) {
		s += g(k); //(L104)
		k++;
	}
	return s;
}
```
Que se passe-t-il lors de l'appel de `f(2)` ?
- Un bloc d'activation est créé pour `f`.
- `f` crée des variables locales et leur donne des valeurs.
- `f` appelle `g` avec l'argument `1`
	- `f` cède le contrôle à `g`
	- Un bloc d'activation est créé pour `g`
	- Quand `g` aura fini son execution, la fonction rend la main à `f`: il faut être en même de reprendre l'execution de `f`
		- Au bon endroit (avec l'adresse de retour)
		- Au bon moment (avec les bonnes valeurs pour les variables)

```py
							|      | 
							| ...  |
							|------|
				 n -> | 1    | }
							|------| } bloc d’activation de g 
adresse de -> | L104 | }
    retour    |------|
				 n -> | 2    | }
							|------| } 
				 s -> | 0    | }
							|------| } bloc d’ativation de f
				 k -> | 1    | }
							|------| }
adresse de -> | ???? | }
    retour		|------|
							| ...  | } avant l’appel à f
    					|      | }
```

### Cas des fonctions récursives

Il a un bloc d'activation par appel récursif.
```ocaml
let rec fibo n =
	if n < 2 then n
	else fibo(n-2) + fibo(n-1)
```

**Pile d'appels correspondante:**
```py
[ f 5 
[ f 5 | f 4 
[ f 5 | f 4 | f 3 
[ f 5 | f 4 | f 3 | f 2 
[ f 5 | f 4 | f 3 | f 2 | f 1 # Renvoie 1 
[ f 5 | f 4 | f 3 | f 2       # On dépile 
[ f 5 | f 4 | f 3 | f 2 | f 0 # Renvoie 0 
[ f 5 | f 4 | f 3 | f 2       # On dépile 
[ f 5 | f 4 | f 3 
[ f 5 | f 4 | f 3 | f 1
 ... 
```

On peut dessiner l'arbre d'appels correspondant:

![](@attachment/Clipboard_2022-12-03-22-54-38.png)

La taille maximale de la pile correspond à la profondeur maximale de l'arbre d'appels. Ici, pour `fibo n`, c'est de l'ordre de $n$.

> On peut suivre la pile d'appels en OCaml avec `#trace f n`.

**Exemple:**
```ocaml
let rec id n =
	if n = 0 then 0
	else 1 + id (n-1)
```
```py
			  appelle
(id 5) ---------> (id 4) --> (id 3) --> (id 2) --> (id 1) --> (id 0) 
																															On arrive à la fin
																															de la chaîne d’appels.
																														          v
																														         Puis:
5 <- (id 5) <-- (id 4) <-- (id 3) <-- (id 2) <-- (id 1) <---------- (id 0) 
              4          3          2          1         renvoie 0
```

**Problème:** L'appel à `id n` demande un espace mémoire proportionnel à $n$ et l'espace disponible sur la pile est faible (8 Mo sur un système linéaire).
On obtiendra rapidement un **stack overflow**.

**Récursivité terminale:** Il est possible dans certains cas d'optimiser la pile d'appels, car il n'est pas toujours nécessaire de sauvegarder le contexte avant de procéder à l'appel récursif.

**Exemple:** Dans l'appel précédent, il est indispensable de sauvegarder ce contexte car il faudra encore ajouter 1 au résultat de l'appel `id (n-1)` avant de renvoyer le résultat.

```ocaml
let id_terminal n = 
	let rec id_aux acc n =
		if n = 0 then acc  else aux (acc+1) (n-1)
	in
	id_aux 0 n
```
Suite d'appels:
```py
(id_terminal 4) --> (id_aux 0 4) --> ... --> (id_aux 1 3) --> (id_aux 4 0)
                                                                       |
                                                                       ∨
4 <- (id_terminal 4) <-- (id_aux 0 4) <-- ... <-- (id_aux 1 3) <-- (id_aux 4 0)
											4                4       4                4   
```
C'est la fonction `id_aux` qui s'occupe vraiment du calcul:
- elle ne fait qu'un seul appel récursif
- elle renvoie immédiatementle résultat de cet appel (aucune opération sur le résultat effectué)

Il est inutile de sauvegarder le contexte dans ce cas-là.

**Définition:** Une fonction récursivesera dite **récursive terminale** *(tail-recursive)* si les seuls appels récursifs qu'elle contient sont placés en position finale, i.e. elle renvoie immédiatement le résultat sans faire d'appels dessus.

* En OCaml, une fonction récursive terminale est compilée en code impératif (garanti)
* En C, avec des options de compilation d'optimisation, c'est possible mais non garanti.

## III. Le tas
Le tas sert à stoker les donnénes **allouées dynamiquement**, c'est-à-dire pendant l'execution du programme et qui ne sont pas simplement locales à une fonction.
* En C, cette allocation mémoire (et la libération) se fait à la main, avec les fonctions `malloc` et `free` (dans le header `stdlib`)
* En Ocaml, c'est géré automatiquement par le ramasse-miettes (le garbage collector)

### A. La fonction `malloc`
Elle a le prototype suivant:
```c
void * malloc (size_t size)
~~~~~~         ~~~~~~~~~~~
 (1)               (2)
```
* **(1) :** Elle renvoie un pointeur, vers le début de la zone mémoire allouée la `void*` signifie que le type est pour l'instant quelconque
* **(2) :** Le paramètre `size` indique la taille en **octets** du bloc de mémoire à allouer.

**Ex:** un `double` est sotcké sur 64 bits, donc 8 octets:
```c
double *x = (double *) malloc(8);
						 ~~~~~~~~
						transtypage
						  ou cast
```
![](@attachment/Clipboard_2022-12-03-23-19-41.png)
On peut également écrire:
```c
double *x = malloc(8);
```
Il faudra initialiser la valeur derrière le pointeur.

```c
double *t = (double *) malloc(24);
```

```py
							8						8 					8
			  ~~~~~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~~~~
t ---> [   t[0]   ][   t[1]   ][   t[2]   ]
				~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
												24
```

`&t[1]` = (adresse de `*t` + la taille d'une case)
 
:warning: La taille du bloc alloué est "oubliée" par C donc il faut s'en souvenir par ailleurs.

**Remarque:** `malloc`  va renvoyer le pointeur nul en cas d'échec d'allocation.
```c
int *p =  malloc(...);
assert(p != NULL)
```

Ex:
```c
double *array_make(int n, double x) {
	double *tab = malloc(8*n);
	for (int i = 0; i < n; i++) {
		tab[i] = x;
	}
	return tab;
}

int main(void) {
	double *t = array_make(10, 1.0):
	for (int i = 1; i < 10; i++) {
		t[i] = t[i-1] * 1.5
	}
}
```
![](@attachment/Clipboard_2022-11-28-11-00-57.png)

### B. L'opérateur `sizeof`
Pénible et source d'erreur de donner directement la valeur numérique de la taille du bloc à allouer. 
Pour faciliter la travail, on a l'opératteur `sizeof` qui prend en argument un type et revoie l'espace occupé par un élément de ce type.

```c
sizeof(char) // -> 8
sizeof(char) // -> 1
sizeof(int)  // -> 4
sizeof(int *) // -> 4 sur une machine 32 bits
sizeof(int *) // -> 8 sur une machine 64 bits (la taille d'une adresse)
```

**Ex:** 
```c
double *array_make(int n, double x) {
	double *tab = malloc(8*n); // n * sizeof(double)
}
```

**Remarque:** 
* `sizeof` peut aussi prendre en argument un type créé par l'utilisateur (avec une structure ou un `typedef`)
* `sizeof` n'est pas une vraie fonction. Elle est évaluée statiquqment à la compilation.

### C. La fonction `free`
POur désallouer la mémoire sur le tas. Son prototype est:
```c
void free(void *p)
```

* L'argument est un pointeur de type quelconque: le pointeur que l'on passe en argument doit obligatoirement avoir été créé par un appel à `malloc`.

**Ex:** &Eacute;crire une fonction qui prend en argument:
* Un tableau `tab` d'entiers
* de longueur `n`
* dont toutes les valeurs sont comprises entre `0` et `borne_sup`
et qui renvoie la valeur la plus fréquete.

```c
int plus_frequent(int t[], int n, int borne_sup) {
	int *freq = malloc( (borne_sup + 1) * sizeof(int) );
	for (int i = 0; i <= borne_sup; i++) {
		freq[i] = 0;
	}

	for (int i = 0; i < n; i++) {
		freq[t[i]]++;
	}

	int max_i = 0;
	for (int i = 0, i <= borne_sup; i++) {
		if (freq[i] > freq[max_i])
			max_i = i;
	}

	free(freq); 
	// ^^^ Si on l'oublie, le tableau restera sur le tas, 
	// on aura plus moyen de le désallouer => fuite de mémoire.
	return max_i;
}
```

**Def:** On dit qu'un programme a une fuite de méoire s'il n'est pas capable de désallouer la totalité de la mémoire qu'il a alloué sur le tas.

**Remarque:** la mémoire est automatiquement vidée à la fin de l'éxécution du programme (géré par le système d'exploitation). Problématique pour des programmes qui tournent longtemps (navigateurs (genre CHROME), etc...)

Dans notre cas, on se forcera à:
* libérer toute la mémoire 
* compiler avec l'option `-fsanitize=adrress` qui permet de repérer les fuites de mémoire

**Voir feuille annexe `fuite.c`:**
On considère le programme C suivant (à l'intérêt fort limité):
```c
#include <stdio.h>
#include <stdlib.h>

void f(void) {
	double *p = malloc(8 * sizeof(double));
	return;
}

int main(void) {
	int *p = malloc(6 * sizeof(int));
	f();
	return 0;
}
```

Compilons et exécutons:
```cmd
>> gcc -o fuite -fnanitize=adress fuite.c

>> ./fuite

...
ERROR: LeakSanitizer: detected memory leaks

Direct leak of 64 byte(s) in 1 object(s) allocated from:
		...
		#1 ... in f
		#2 ... in main

Direct leak of 24 byte(s) in 1 object(s) allocated from:
		...
		#1 ... in main
...

SUMMARY: AddressSanitizer: 88 byte(s) leaked in 2 allocation(s).
```
Deux fuites sont bien détectées:
* une de 64 octets alloués dans la fonction `f`, elle-même appeléer par la fonction `main`;
* l'autre de 24 octets alloués directement par la fonction `main`.

**Erreurs courantes:**
* Oublier de désallouer: fuite mémoire
* "Use after free"
* "Double free"
* Appel de `free` sur un pointeur qui ne provient pas d'un `malloc` *(sauf `free(NULL)`)*.


