<script>
    import {paragraph} from "$lib/utils/gen.utils.js";
    import {writable} from "svelte/store";
    import Paragraph from "$lib/svotion/molecules/Paragraph.svelte";
    import Heading from "$lib/svotion/molecules/Heading.svelte";
    import {addBlock} from "$lib/utils/blocks.utils.js";

    export let value = "";

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
        value = JSON.stringify(bs);
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
    border-radius: 7px;
    background-color: white;
    border: 1px solid var(--svotion-gray-200);
    cursor: text;
    .blank {
      width: 100%;
      height: 30px;
    }
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