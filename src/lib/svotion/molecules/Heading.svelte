<script>
    import Block from "$lib/svotion/organisms/Block.svelte";
    import Text from "$lib/svotion/atoms/Text.svelte";
    import {getLastKey} from "$lib/utils/keys.utils.js";
    import {addBlock, deleteBlock} from "$lib/utils/blocks.utils.js";
    import {paragraph} from "$lib/utils/gen.utils.js";
    import {getGlobalCaretPosition, setCaretToEnd} from "$lib/utils/caret.utils.js";

    export let blocks;
    export let instances;

    export let id;
    export let type;
    export let params;
    export let options;
    export let value;

    let focus = false;

    let editable;

    $: {
        if (options) {
            if (editable && options.focus) {
                editable.focus();
                options.focus = false;
            }
        }
    }

    const handleKeyDown = (e, keys) => {

        if (getLastKey(keys) === "enter") {
            if (!keys.shift) {
                addBlock(blocks, id, paragraph("", {focus: true}));
            }
        }

        if (getLastKey(keys) === "backspace") {
            if (getGlobalCaretPosition(e.target) === 0) {
                if (e.target.innerText === "" || e.target.innerText === "\n") {
                    e.preventDefault();
                    e.stopPropagation();
                    e.target.blur();
                    deleteBlock(blocks, instances, id, true);
                } else {
                    // e.preventDefault();
                    // e.stopPropagation();
                    // e.target.blur();
                    // spliceBlock(blocks, instances, id)
                }
            }
        }

    }

    const handleFocus = () => {
        // focus = true;
    }

    const handleBlur = () => {
        // focus = false;
    }

    // INSTANCES MANAGING FUNCTIONS BELOW

    export const focusAtEnd = () => {
        setCaretToEnd(editable);
    }

    export const addHTML = (html) => {
        value += html;
        setCaretToEnd(editable);
    }

</script>

<Block {focus} store={blocks} {id}>
    <Text
            {id}
            {type}
            parameters={{level: params.level}}
            bind:value
            onkeydown={handleKeyDown}
            bind:editable
            bind:focus
            placeholder="Heading {params.level - 1} here..."

    />
</Block>