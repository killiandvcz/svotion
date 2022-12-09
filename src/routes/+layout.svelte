<div class="_">
    <slot></slot>
</div>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  :global(*){
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
    color: var(--gray-800);
    user-select: none;
  }

  ._{
    position: relative;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--svotion-gray-50);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
  }

  :root{
    --svotion-gray-50:  rgb(247, 247, 248);
    --svotion-gray-100: rgb(236, 236, 238);
    --svotion-gray-200: rgb(225, 225, 228);
    --svotion-gray-300: rgb(202, 202, 208);
    --svotion-gray-400: rgb(162, 162, 172);
    --svotion-gray-500: rgb(134, 134, 147);
    --svotion-gray-600: rgb(114, 114, 129);
    --svotion-gray-700: rgb(97, 97, 110);
    --svotion-gray-800: rgb(71, 71, 80);
    --svotion-gray-900: rgb(60, 60, 68);
  }

</style>