<script>
    export let handleClick = () => {
        console.log('click')
    }
</script>

<div class="option" on:click={handleClick}>
    <slot></slot>
</div>

<style lang="scss">
  .option{
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    &:hover{
      background: var(--svotion-gray-100);
    }
  }
</style>