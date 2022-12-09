<script>
    import {clickOutside} from "$lib/utils/events.utils.js";

    export let handleOutsideClick;
    export let title = "Menu"

</script>


<div class="menu" use:clickOutside on:click_outside={handleOutsideClick}>
    <div class="head">
        <span class="title">{title}</span>
    </div>
    <div class="options">
        <slot></slot>
    </div>

</div>

<style lang="scss">
  .menu{
    width: 100%;
    max-width: 500px;
    min-width: 300px;
    background: white;
    border: var(--svotion-gray-200) 1px solid;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .head{
      display: flex;
      flex-direction: column;
      .title{
        font-size: 15px;
        font-weight: 600;
      }
    }
  }
</style>