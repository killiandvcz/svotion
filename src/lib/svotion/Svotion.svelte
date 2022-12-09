<script>
    import {paragraph} from "$lib/utils/gen.utils.js";
    import {writable} from "svelte/store";
    import Paragraph from "$lib/svotion/molecules/Paragraph.svelte";
    import Heading from "$lib/svotion/molecules/Heading.svelte";
    import {addBlock} from "$lib/utils/blocks.utils.js";

    const initialBlock = paragraph("")
    const blocks = writable([initialBlock]);
    const history = writable([]);
    const instances = {};

    const blockList = {
        paragraph: Paragraph,
        heading: Heading
    }

    blocks.subscribe(bs => {
        history.update(h => [...h, bs]);
        if($history.length > 30) {
            history.update(h => h.slice(1));
        }
    })

    const addToEnd = () => {
        const lastBlock = $blocks[$blocks.length - 1];
        addBlock(blocks, lastBlock.id, paragraph("", {focus: true}));
    }

</script>

<!--{JSON.stringify($blocks)}-->

<div class="editor">
    {#each $blocks as b (b.id)}
        <div class="block">
            <svelte:component
                    blocks={blocks}
                    this={blockList[b.type]}
                    id={b.id}
                    type={b.type}
                    params={b.params || {}}
                    bind:value={b.value}
                    bind:options={b.options}

                    bind:this={instances[b.id]}
                    instances={instances}
            />
        </div>
    {/each}
    <div class="blank" on:click={addToEnd}></div>
</div>


<style lang="scss">
  .editor {
    padding: 15px 5px;
    width: 100%;
    height: 100%;
    max-width: 700px;
    border-radius: 7px;
    background-color: white;
    border: 1px solid var(--svotion-gray-200);
    cursor: text;
    .blank {
      width: 100%;
      height: 30px;
    }
  }

</style>