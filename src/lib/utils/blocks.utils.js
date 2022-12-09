import {paragraph} from "$lib/utils/gen.utils.js";
import {get} from "svelte/store";

export const addBlock = (store, currentID, newBlock = paragraph()) => {
    store.update(blocks => {
        const index = blocks.findIndex((block) => block.id === currentID);
        blocks.splice(index + 1, 0, newBlock);
        return blocks;
    })
}

export const deleteBlock = (store, instances, currentID, refocus = false) => {
    if (get(store).length > 1) {
        const storeClone = [...get(store)];

        const currentIndex = get(store).findIndex((block) => block.id === currentID);
        const previousID = storeClone.slice(0, currentIndex).reverse().find(block => block.editable)?.id;

        store.update(blocks => {
            blocks.splice(currentIndex, 1);
            return blocks;
        });

        if (previousID) {
            if (refocus) {
                instances[previousID].focusAtEnd();
            }
        }


    }
}

export const transformBlock = (store, currentID, newBlock) => {
    store.update(blocks => {
        const index = blocks.findIndex((block) => block.id === currentID);
        blocks[index] = newBlock;
        return blocks;
    })
}

export const spliceBlock = (store, instances, sourceID) => {
    if (get(store).length > 1) {
        const sourceIndex = get(store).findIndex((block) => block.id === sourceID);
        console.log(sourceIndex);
        if (sourceIndex > 0) {
            const previousID = get(store)[sourceIndex - 1].id;
            instances[previousID].addHTML(get(store)[sourceIndex].value);
            store.update(blocks => {
                blocks.splice(sourceIndex, 1);
                return blocks;
            })
            instances[previousID].focusAtEnd();
        }
    }
}

export const changeBlockFocus = (store, instances, currentID, direction) => {
    const currentIndex = get(store).findIndex((block) => block.id === currentID);
    if (direction === "up" && currentIndex > 0) {
        const previousID = get(store).slice(0, currentIndex).reverse().find(block => block.editable).id;
        if (previousID) {
            instances[previousID].focusAtEnd();
        }

    }
    if (direction === "down" && currentIndex < get(store).length - 1) {
        const nextID = get(store).slice(currentIndex + 1).find(block => block.editable).id;
        if (nextID) {
            instances[nextID].focusAtStart();
        }

    }

}

