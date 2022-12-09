<script>
    import {elements} from "$lib/svotion/constants/types.constants.js";
    import {resetKeys, setKeys, unsetKeys} from "$lib/utils/keys.utils.js";
    import {addBlock} from "$lib/utils/blocks.utils.js";

    export let id;
    export let type;
    export let parameters;
    export let value;
    export let placeholder = "";

    export let innerText;
    export let editable;

    export let focus;

    let keys = resetKeys();

    export let onkeydown = () => {};
    const keyDownHandler = e => {
        const key = e.key.toLowerCase();
        keys = setKeys(keys, key);

        if (key === "enter") {
            if (!keys["shift"]) {
                e.preventDefault();
                e.stopPropagation();

            }
        }

        if (key === "arrowup") {
            //if cursor is at the beginning of the line
        }

        if (key === "arrowdown") {
            //if cursor is at the end of the line

        }

        onkeydown(e, keys);
    }

    const keyUpHandler = e => {
        const key = e.key.toLowerCase()
        keys = unsetKeys(keys, key);
    }

    const blurHandler = () => {
        keys = resetKeys();
        focus = false;
    }

    const focusHandler = () => {
        focus = true;
    }

</script>

<svelte:element
        class="svotion-text"
        data-placeholder={placeholder}
        contenteditable
        this={elements[type](parameters)}
        bind:innerHTML={value}
        bind:this={editable}

        on:keydown={keyDownHandler}
        on:keyup={keyUpHandler}
        on:blur={blurHandler}
        on:focus={focusHandler}
></svelte:element>

<style lang="scss">
  .svotion-text{
    border: none;
    outline: none;
  }
  .svotion-text:focus:empty:before {
    content: attr(data-placeholder);
    color: var(--svotion-gray-500);
  }
</style>