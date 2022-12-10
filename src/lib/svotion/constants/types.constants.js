import {paragraph, heading} from "../../utils/gen.utils.js";

export const elements = {
    paragraph: (p) => "p",
    heading: (p) => `h${p.level}`,
}

export const blocks = {
    paragraph: {
        label: "Paragraph",
        generator: p => paragraph(p.value || "", p.options || {}),
    },
    headingB: {
        label: "Heading 1",
        generator: p => heading(2, p.value || "", p.options || {}),
    },
    headingM: {
        label: "Heading 2",
        generator: p => heading(3, p.value || "", p.options || {}),
    },
    headingS: {
        label: "Heading 3",
        generator: p => heading(4, p.value || "", p.options || {}),
    }
}