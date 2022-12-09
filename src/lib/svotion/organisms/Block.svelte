<script>
    import Menu from "$lib/svotion/organisms/Menu.svelte";
    import {Icon} from "@steeze-ui/svelte-icon";
    import {Add, Switcher} from "@steeze-ui/carbon-icons";
    import Option from "$lib/svotion/atoms/menu/Option.svelte";
    import {blocks} from "$lib/svotion/constants/types.constants.js";
    import {options} from "$lib/svotion/constants/options.constants.js";
    import {addBlock} from "$lib/utils/blocks.utils.js";
    import {deleteBlock, transformBlock} from "$lib/utils/blocks.utils.js";

    export let id;
    export let store;
    export let instances;

    export let focus = false;
    let menu = 0;

    const handleClick = (fn) => {
        menu = 0;
        fn();
    }

</script>

<div class="block" class:focus>
    <div class="actions">
        <div class="icon" on:click={() => menu = 1}>
            <Icon src={Add} />
        </div>
        <div class="icon" on:click={() => menu = 2}>
            <Icon src={Switcher}  />
        </div>
        {#if menu === 1}
            <Menu handleOutsideClick={() => menu = 0} title="New Block">
                {#each Object.entries(blocks) as [key, b]}
                    <Option handleClick={() => handleClick(() => addBlock(store, id, b.generator({options: {focus: true}})))} >{b.label}</Option>
                {/each}

            </Menu>
        {:else if menu === 2}
            <Menu handleOutsideClick={() => menu = 0} title="Options">
                <Option handleClick={() => menu = 3}>
                    Transform
                </Option>
                <Option handleClick={() => handleClick(() => deleteBlock(store, instances, id))}>
                    Delete
                </Option>

                <!--{#each Object.entries(options) as [key, opt]}-->
                <!--    <Option handleClick={() => handleClick(() => opt.action({store, instances, id}))}>{opt.label}</Option>-->
                <!--{/each}-->
            </Menu>
        {:else if menu === 3}
            <Menu handleOutsideClick={() => menu = 0} title="Transform">
                {#each Object.entries(blocks) as [key, b]}
                    <Option handleClick={() => handleClick(() => transformBlock(store, id, b.generator({options: {focus: true}})))}>{b.label}</Option>
                {/each}
            </Menu>

        {/if}
    </div>
    <div class="inner">
        <slot></slot>

    </div>
</div>

<style lang="scss">
  .block{
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    .actions{
      cursor: auto;
      padding: 10px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      position: relative;
      .icon{
        padding: 3px;
        height: 25px;
        width: 25px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        color: transparent;
      }
    }
    .inner{
      flex: 1;
      padding: 10px;
      border-radius: 5px;
      position: relative;
    }
    &.focus{
      .inner{
        background-color: var(--svotion-gray-100);
      }
    }

    &:hover{
      .actions{
        .icon{
          color: var(--svotion-gray-300);
          &:hover{
            background: var(--svotion-gray-200);
            color: var(--svotion-gray-600);
          }
        }
      }
    }
  }
</style>