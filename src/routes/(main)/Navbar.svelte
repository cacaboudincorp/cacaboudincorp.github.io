<script lang="ts">
  import cn from 'clsx';
  import LanguageSelect from './LanguageSelect.svelte';
  import LanguageSelectAlt from './LanguageSelectAlt.svelte';
  import IconButtonNavbar from './IconButtonNavbar.svelte';
  import IconButton from './IconButton.svelte';

  type ListItemProps = {
    className?: string;
    title: string;
    href: string;
    content: string;
  };

  let pages = [
    {
      title: 'Home',
      url: '/',
      backgroundColor: 'var(--green-main)',
      secondaryColor: 'var(--green-sec-alt)',
      shadingColor: 'var(--green-shad)',
      textColor: 'var(--green-text)',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--green-text)"><path d="M244.63-202.87h90.22V-400q0-23.34 16.62-39.96 16.63-16.63 39.96-16.63h177.14q23.33 0 39.96 16.63 16.62 16.62 16.62 39.96v197.13h90.22V-556.8L480-732.89 244.63-556.88v354.01Zm-113.17 0V-556.8q0-27.09 12.02-51.14 12.02-24.04 33.61-39.6l235.37-176.33Q443.37-846.3 480-846.3q36.63 0 67.54 22.43l235.37 176.33q21.59 15.56 33.61 39.6 12.02 24.05 12.02 51.14v353.93q0 47.87-32.65 80.52T715.37-89.7H572.15q-23.67 0-40.13-16.62-16.45-16.62-16.45-39.96V-347h-71.14v200.72q0 23.34-16.45 39.96-16.46 16.62-40.13 16.62H244.63q-47.87 0-80.52-32.65t-32.65-80.52ZM480-468Z"/></svg>',
      iconOnly: true
    },
    {
      title: 'Games',
      url: '/games',
      backgroundColor: 'var(--yellow-main)',
      secondaryColor: 'var(--yellow-sec)',
      shadingColor: 'var(--yellow-shad)',
      textColor: 'var(--yellow-text)',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--yellow-text)"><path d="M182-180.78q-61.17 0-93.7-43.98-32.52-43.98-24.95-101.76l40.87-298.31q10.19-67.12 60.59-110.76 50.41-43.63 117.76-43.63h394.86q67.35 0 117.76 43.63 50.4 43.64 60.59 110.76l40.87 298.31q7.57 58.35-25.8 102.04-33.37 43.7-92.38 43.7-24.3 0-45.97-8.91-21.67-8.92-38.94-26.18l-84.94-84.91H351.91L267-215.87q-17.26 17.26-38.93 26.18-21.68 8.91-46.07 8.91Zm10.91-110.31 115.7-115.69h343.35l115.69 115.69q1.44 1.44 11.48 4.31 7.11 0 11.32-4.52 4.2-4.53 3.33-11.57l-44-308q-3.43-26.17-23.58-44.26-20.16-18.09-47.63-18.09h-396q-27.48 0-47.64 18.09-20.15 18.09-23.58 44.26l-44 308q-.87 7.04 2.8 11.57 3.68 4.52 10.72 4.52.87 0 12.04-4.31Zm512.76-163.8q11.5-11.5 11.5-28.5t-11.5-28.5q-11.5-11.5-28.5-11.5t-28.5 11.5q-11.5 11.5-11.5 28.5t11.5 28.5q11.5 11.5 28.5 11.5t28.5-11.5Zm-74.34-113.78q11.5-11.5 11.5-28.5t-11.5-28.5q-11.5-11.5-28.5-11.5t-28.5 11.5q-11.5 11.5-11.5 28.5t11.5 28.5q11.5 11.5 28.5 11.5t28.5-11.5ZM480.57-480Zm-170-30v35.48q0 13 8.5 21.5t21.5 8.5q13 0 21.5-8.5t8.5-21.5V-510h35.47q13 0 21.5-8.5t8.5-21.5q0-13-8.5-21.5t-21.5-8.5h-35.47v-35.48q0-13-8.5-21.5t-21.5-8.5q-13 0-21.5 8.5t-8.5 21.5V-570h-36.05q-13 0-21.5 8.5t-8.5 21.5q0 13 8.5 21.5t21.5 8.5h36.05Z"/></svg>',
      iconOnly: false
    },
    {
      title: 'Art',
      url: '/art',
      backgroundColor: 'var(--blue-main)',
      secondaryColor: 'var(--blue-sec)',
      shadingColor: 'var(--blue-shad)',
      textColor: 'var(--blue-text)',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--blue-text)"><path d="M480-60.78q-85.86 0-162.3-33.2-76.44-33.19-133.48-90.24-57.05-57.04-90.24-133.49-33.2-76.45-33.2-162.32 0-86.93 33.63-163.32 33.63-76.39 91.68-133.22 58.04-56.82 135.39-89.74 77.35-32.91 165.16-32.91 83.62 0 158.3 28.91 74.67 28.92 131.28 79.96 56.61 51.05 89.8 120.77 33.2 69.72 33.2 150.45 0 118.39-70.85 188.37t-178.2 69.98h-60.99q-6.74 0-9.96 3.87-3.22 3.87-3.22 9.3 0 10.87 11.61 26.59t11.61 41.89q0 54.52-33.72 86.43-33.72 31.92-85.5 31.92ZM480-480Zm-170.22 23q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm116.61-154.91q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm193.22 0q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17ZM734.52-457q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17ZM476.61-166.78q7.73 0 12.45-4.37 4.72-4.38 4.72-11.37 0-14-15.28-31.02-15.28-17.03-15.28-52.76 0-44.83 30.96-72.66 30.97-27.82 75.82-27.82h80.17q64.87 0 103.96-37.94 39.09-37.93 39.09-110.45 0-121-91.37-199.53-91.37-78.52-215.22-78.52-132.62 0-226.23 91.31-93.62 91.3-93.62 222.18 0 129.9 90.68 221.43 90.67 91.52 219.15 91.52Z"/></svg>',
      iconOnly: false
    },
    {
      title: 'Projects',
      url: '/projects',
      backgroundColor: 'var(--pink-main)',
      secondaryColor: 'var(--pink-sec)',
      shadingColor: 'var(--pink-shad)',
      textColor: 'var(--pink-text)',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--pink-text)"><path d="m382.26-323.18 97.74-59.6 98.3 60.6-25.65-111.78 87.83-76.21-114.92-10.18L480-626.95l-45.56 106.17-114.35 10.17 87.82 76.65-25.65 110.78ZM480-258.26l-150.74 91.52q-14.96 9.26-30.91 7.98-15.96-1.28-27.78-10.54-11.83-9.27-18.24-23.44-6.42-14.17-2.29-31.13l40.05-172.04-134.57-116.83q-13.39-11.82-16.74-27-3.35-15.17 1.22-29.56 4.57-14.4 16.24-24.22 11.67-9.83 29.63-11.83l176.48-15.3 68.78-163.31q6.7-16.52 20.3-24.21 13.61-7.7 28.57-7.7t28.57 7.7q13.6 7.69 20.3 24.21l68.78 163.31 177.05 15.3q17.95 2 29.34 11.83 11.39 9.82 15.96 24.22 4.57 14.39 1.5 29.56-3.07 15.18-16.46 27L670.48-395.91l40.04 172.61q4.13 16.95-2.28 31.13Q701.83-178 690-168.74q-11.83 9.26-27.78 10.54-15.96 1.29-30.92-7.97L480-258.26Zm312.61-474.96-60.57 35.57q-7.69 4.13-14.6-1.07-6.92-5.19-4.92-13.89l16-66-53-44q-6.69-6.13-4.13-14.17 2.57-8.05 11.83-9.05l70-6 27.56-63q3.13-8.26 11.83-8.26t11.83 8.26l27.56 63 70 6q9.26 1 11.83 9.05 2.56 8.04-4.13 14.17l-53 44 16 66q2 8.7-4.92 13.89-6.91 5.2-14.6 1.07l-60.57-35.57ZM480-474.78Z"/></svg>',
      iconOnly: false
    },
    {
      title: 'Resume',
      url: '/resume',
      backgroundColor: 'var(--white-main)',
      secondaryColor: 'var(--white-sec)',
      shadingColor: 'var(--white-shad)',
      textColor: 'var(--white-text)',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--white-text)"><path d="M283.39-283.39h280v-80h-280v80Zm0-156.61h393.22v-80H283.39v80Zm0-156.61h393.22v-80H283.39v80Zm-76.61 495.83q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-546.44q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85h546.44q44.3 0 75.15 30.85 30.85 30.85 30.85 75.15v546.44q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H206.78Zm0-106h546.44v-546.44H206.78v546.44Zm0-546.44v546.44-546.44Z"/></svg>',
      iconOnly: false
    },
    {
      title: 'About',
      url: '/about',
      backgroundColor: 'var(--main-dark)',
      secondaryColor: 'var(--main-dark-shad)',
      shadingColor: 'var(--main-dark-shad)',
      textColor: 'var(--main-dark-text)',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--main-dark-text)"><path d="M353.15-541.98q-52.37-52.37-52.37-126.85 0-74.48 52.37-126.56 52.37-52.09 126.85-52.09 74.48 0 126.85 52.09 52.37 52.08 52.37 126.56t-52.37 126.85Q554.48-489.61 480-489.61q-74.48 0-126.85-52.37ZM140.78-237.17v-26.35q0-39.26 20.44-72.17 20.43-32.9 54.3-50.22 63.7-31.57 129.93-47.63 66.24-16.07 134.55-16.07 69.39 0 135.65 15.78 66.26 15.79 128.83 47.35 33.87 17.24 54.3 49.99 20.44 32.75 20.44 72.97v26.35q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H246.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15Zm106 0h466.44v-23.53q0-10.45-5.5-19t-14.5-13.3q-50.61-24.74-103.92-37.67Q536-343.61 480-343.61q-54.87 0-109.3 12.94-54.44 12.93-103.92 37.67-9 4.75-14.5 13.3t-5.5 19v23.53ZM531.7-617.11q21.52-21.5 21.52-51.7 0-30.19-21.5-51.43-21.51-21.24-51.7-21.24t-51.72 21.24q-21.52 21.24-21.52 51.43 0 30.2 21.5 51.7 21.51 21.5 51.7 21.5t51.72-21.5ZM480-668.83Zm0 431.66Z"/></svg>',
      iconOnly: false
    },
    // {
    // 	title: 'Language',
    // 	url: '/',
    // 	backgroundColor: 'var(--main-dark)',
    // 	secondaryColor: 'var(--main-dark-shad)',
    // 	shadingColor: 'var(--main-dark-shad)',
    // 	textColor: 'var(--green-text)',
    // 	icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--main-dark-text)"><path d="M309.17-74.65q-80.13-34.57-140.04-94.48-59.91-59.91-94.48-140.04Q40.09-389.3 40.09-480q0-90.7 34.56-170.83 34.57-80.13 94.48-140.04 59.91-59.91 140.04-94.48Q389.3-919.91 480-919.91q90.7 0 170.83 34.56 80.13 34.57 140.04 94.48 59.91 59.91 94.48 140.04Q919.91-570.7 919.91-480q0 90.7-34.56 170.83-34.57 80.13-94.48 140.04-59.91 59.91-140.04 94.48Q570.7-40.09 480-40.09q-90.7 0-170.83-34.56Zm169.7-90.26q22.3-33.87 40.59-73.09 18.28-39.22 30.28-80.22H409.7q12 41 29.43 80.22 17.44 39.22 39.74 73.09Zm-107.78-17.44q-18.13-30-30.07-64.5-11.93-34.5-20.93-71.37H208.35q26.43 46.44 68.8 82.72t93.94 53.15Zm216.13 0q51.56-16.87 94.5-53.15 42.93-36.28 69.37-82.72H639.35q-9 36.87-21.5 71.37-12.5 34.5-30.63 64.5ZM172.04-403.13h131.18q-2.57-18.57-4.07-37.5-1.5-18.94-1.5-39.37 0-21 1.5-39.65t4.07-37.22H172.04q-4.43 18-6.71 36.94-2.29 18.93-2.29 39.93 0 20.43 2.29 39.65 2.28 19.22 6.71 37.22Zm218.22 0h178.91q3-18.57 3.94-37.5.93-18.94.93-39.37 0-21-.93-39.65-.94-18.65-3.94-37.22H390.26q-3 18.57-4.5 37.22t-1.5 39.65q0 20.43 1.5 39.37 1.5 18.93 4.5 37.5Zm265.96 0h130.61q4.43-18 6.71-37.22 2.29-19.22 2.29-39.65 0-21-2.29-39.93-2.28-18.94-6.71-36.94H656.22q2 18.57 3.21 37.22 1.22 18.65 1.22 39.65 0 20.43-1.22 39.37-1.21 18.93-3.21 37.5Zm-16.87-239.22h111.74q-26.44-46.43-69.37-82.43-42.94-36-94.5-52.87 18.13 30 30.63 64.22 12.5 34.21 21.5 71.08Zm-229.65 0h140.04q-10.87-40.43-29.15-79.15-18.29-38.72-41.72-76.89-22.3 38.17-39.74 76.89-17.43 38.72-29.43 79.15Zm-201.35 0h111.74q9-36.87 20.93-71.08 11.94-34.22 30.07-64.22-51.57 16.87-93.94 52.87t-68.8 82.43Z"/></svg>',
    // 	iconOnly: true
    // }
  ];
</script>

<nav class={cn('flex', 'w-full', 'justify-center', 'fixed z-10')}>
  <div
    class={cn(
      'items-container',
      'flex flex-row',
      'items-center justify-center',
      'w-full max-w-[1200px]',
      'px-10'
    )}
  >
    {#each pages as page, i}
      <a
        class={cn(
          (page.iconOnly ? 'navbar-link-icon-only' : 'navbar-link-regular'),
          'navbar-link group relative',
          'h-fit',
          '-translate-y-14'
        )}
        href={page.url}
      >
        <div
          style={`
          background-color: ${page.backgroundColor};
          box-shadow:
            inset 0px 0px 0px var(--navbar-shadow-step-1) ${page.secondaryColor},
            inset 0px 0px 0px var(--navbar-shadow-step-2) ${page.backgroundColor},
            inset 0px 0px 0px var(--navbar-shadow-step-3) ${page.secondaryColor},
            0px 2px 0px ${page.shadingColor},
            0px 4px 0px ${page.shadingColor},
            0px 6px 0px ${page.shadingColor},
            0px 8px 0px ${page.shadingColor},
            0px 10px 0px ${page.shadingColor},
            2px 17px 0px var(--transp-shad);
            color: ${page.textColor};
          `}
          class={cn(
            'navbar-button',
            'relative',
            'text-2xl text-center',
            'rounded-b-3xl',
            'translate-y-0',

            'transition-transform',
            'ease-(--ease-out-back) duration-300',
            'group-hover:translate-y-3'
          )}
        >
          <!-- <div class="icon w-full flex flex-col justify-center items-center"> -->
          <!-- </div> -->
          <div class="button-content w-full items-center justify-center">
            {@html page.icon}
            {#if !page.iconOnly}
              <div class="text flex text-center">
                <span class="text-span w-full hidden"> {page.title} </span>
              </div>
            {/if}
          </div>
        </div>
      </a>
    {/each}
    <!-- <IconButtonNavbar /> -->
    <!-- <LanguageSelectAlt /> -->
  </div>
</nav>

<style>
  .items-container {
    gap: 0.5rem;
  }

  .button-content {
    display: flex;
    flex-direction: column;

    gap: 12px;
  }

  .icon {
    display: flex;
  }

  .text {
    display: none;
  }

  .text-span {
    font-size: 8px;
    line-height: var(--tw-leading, var(--text-2xs--line-height));
    display: inline
  }

  .navbar-link-icon-only {
    flex: 0;
  }

  .navbar-link-regular {
    flex: 0;
  }

  .navbar-button {
    --navbar-shadow-step-1: 4px;
    --navbar-shadow-step-2: 8px;
    --navbar-shadow-step-3: 12px;
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 24px;
    padding-top: 64px;
  }

  @media (min-width: 768px) {
    .text-span {
      font-size: var(--text-lg) /* 1.125rem = 18px */;
      line-height: var(--tw-leading, var(--text-lg--line-height) /* calc(1.75 / 1.125) ≈ 1.555556 */);
      display: inline
    }

    .navbar-button {
      --navbar-shadow-step-1: 5px;
      --navbar-shadow-step-2: 10px;
      --navbar-shadow-step-3: 15px;
    }

    .navbar-button {
      padding-left: 24px;
      padding-right: 24px;
      padding-bottom: 24px;
      padding-top: 64px;
    }

    .items-container {
      gap: 1rem;
    }

    .icon {
      display: none;
    }

    .text {
      display: flex;
    }

    .button-content {
      display: flex;
      flex-direction: column;
      gap: 0px;
    }

    .navbar-link-regular {
      flex: 1;
    }
  }

  @media (min-width: 950px) {
    .button-content {
      display: flex;
      flex-direction: row;
      gap: 12px;
    }
  }
</style>
