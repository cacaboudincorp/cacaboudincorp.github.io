---
title: Chap 7 · Représentation des nombres
attachments: [Clipboard_2022-12-05-11-17-28.png, Clipboard_2022-12-05-11-17-35.png]
tags: [info]
created: 2022-12-05T09:24:54.691Z
modified: 2022-12-05T10:51:04.449Z
---

# Chap 7 · Représentation des nombres
[[@toc]]
## I. Entiers
### A. Entiers naturels en base $b$
**Théorème:** Soit $b$ un entier &>= 2&.
Tout entier &n in NN& peut s'écrire sous la forme: &&n = sum_(i=0)^pa_ib^i " avec " a_i in ⟦0, b⟧&& 

Si on impose &a_p != 0&, alors cette écriture est unique. On note &n = bar(a_p ... a_0)^b&.
C'est la décomposition de &n& en base &b&.

**Remarque:** la condition d'unicité pose problème si &n=0&. Par convention, la décomposition de zéro est vide. 

**Vocabulaire:**
* Les chiffres (i.e. les &a_i&) qui correspondent au plus grandes puissances de &b& sont dits plus significatifs (ou de poids fort)
* Les chiffres qui correspondent au plus *petites* puissances de &b& sont dits _moins_ significatifs (ou de poids _faible_).
* En base 2, les chiffres possibles sont &0& et &1&.
On parle de _chiffre binaire_ ou _<u>bi</u>nary <u>d</u>igit_ ou _bit_.

**Remarque:** Si on écrit &n = 42&, ça signifie &n = bar(42)^10&.
En informatique, on utilise principalement la _base 2 (dite binaire)_, la _base 16 (dite hexadécimale)_ et parfois la _base 8 (dite octale)_.

En hexadécimal, les chiffres sont donnés par les symboles: `0123456789ABCDEF`

**En OCaml:**
```ocaml
# 0b10010   (* binaire *)
- : int = 18

# 0xff      (* hexadécimal *)
- : int = 255
# 0xFF
- : int = 255

# 0o77      (* octal *)
- : int = 64
# 077 (* ⚠️ Un entier préfixé d'un 0 est octal ! *)
- : int = 64
```

**En C:**
```c
int n = 0b10010; // Pas dans la norme C. Dépend du compilateur. Donc à éviter !

int n = 0xff;

int n = 077;
```

> **Division euclienne:**
> 
> Soit &b != 0&. 
> Pour tout &a in NN&, il existe un unique couple &(q,r) in NN^2&
> Tel que: &a = bq + r& et &r in ⟦0, b⟧&.

**Preuve:** par récurrence forte.

*Initialisation:* Pour &n=0&, la représentation est vide par convention.

_Hérédité:_ On prend &n>0& et on suppose l'existence et unicité de la décomposition pour tout &k < n&.

On divise avec la division euclienne &n& par &b&:
&&n = bq + r ", avec " r in ⟦ 0, b ⟦&&

_Existence:_ comme &b>1&, on a &q < n&.
Par hypothèse de récurrence, on peut écrire &q = underset(i=0)overset(p)sum a_i b^i&
Donc:
&&n =  b sum_(i=0)^(p) a_i b^i + r&&
&&n =  sum_(i=0)^(p) a_i b^(i+1) + r&&
&&n =  sum_(i=0)^(p+1) a_(i-1) b^(i) + r&&
&&n =  sum_(i=0)^(p+1) alpha_(i) b^(i) " avec "{ (alpha_0, =, r), (alpha_i, =, alpha_i - 1) :}&&
On donc bien l'existence de la décomposition.

_Unicité:_ On suppose que &n& possède deux décompositions:
|&&n = sum_(i=0)^(p) a_i b^i&& | &&n = sum_(j=0)^(p') alpha_j b^j&&| 
|-|-|
&&n = a_0 + b underbrace( sum_(i=1)^(p) a_i b^(i-1) )_(= q in NN)&& | &&n = alpha_0 + b underbrace( sum_(j=1)^(p') alpha_j b^(j-1) )_(= q' in NN)&& |
| &&n = underbrace(a_0)_(in ⟦0, b ⟦) + bq&& | &&underbrace(alpha_0)_(in ⟦ 0, b ⟦) + bq'&& |

Par unicité de la division eucliienne: &{ (a_s0 = alpha_0),(q = q') :}&
or &q& et &q'& sont &<n& donc par hypothèse de récurrence, il y a unicité de la décomposition d'où: &p=p'& et &a_i = alpha_i&

D'où l'unicité pour &n&.

_Conclusion:_ Pour tout &n in NN&, on a prouvé l'existence et l'unicité de la décomposition pour &n&.

**Exemple:** décomposition de 861 en base 10.
**Note:** De gauche à droite on a de moins vers plus significatif.

![](@attachment/Clipboard_2022-12-05-11-17-35.png)
![](@attachment/Clipboard_2022-12-05-11-17-28.png)

Donc &bar(861)^10 = bar(underbrace(11)_3 underbrace(0101)_5 " " underbrace(1101)_"D")^2 = bar("35D")^16&

**Exemple:** si on a la décomposition en base &b& et on veut recalculer &n&:

&&n = sum_(i=0)^p a_i b^i = a_0 + b(a_1 + b(a_2 + ... (a_(p-1) + ba_p)))&&
&&=a_0 + ba_1 + b^2 a_2 + ... + b^p a_p&&
&&=a_0 + b (a_1 + b a_2 + ... + b^(p-1) a_p)&&
C'est l'**algorithme de Hörner**.

Petit-boutiste et gros-boutiste (small-??? en anglais): les chiffres faibles ou forts d'abord. Pour les humains, c'est plus naturel d'être gros-boutiste, mais pour les ordinateurs, il y a des avantages au petit-boutisme.

**Exercices:** 
1\) &Eacute;crire an OCaml `eval_msd : int -> int list -> int (*valeur du nombre en base 10*)`

La liste des chiffres commence par les chiffres les plus significatifs (`msd = most significant digit`)

```ocaml
let rec eval_msd b li =
	let rec eval_aux li res = 
		match li with 
		| [] -> res
		| x :: xs -> eval_aux xs (x + b*res) in
	in
	eval_aux li 0
;;
```

2\) `eval_lsd`

```ocaml
let rec eval_lsd b l =
	match l with
	| [] -> 0
	| x::xs -> x + b*(eval_lsd b xs)
;;
```

