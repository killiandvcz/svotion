import {deleteBlock} from "$lib/utils/blocks.utils.js";

export const options = {
    delete: {
        label: "Delete",
        action: p => deleteBlock(p.store, p.instances, p.id, p.refocus || false),
    }
}