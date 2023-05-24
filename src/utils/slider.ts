import React from "react";

export const forwardIndexHandler = (index: number, set: React.Dispatch<React.SetStateAction<number>>, array: any[]) => {
    set(index + 1)
    if (index + 1 === array.length) {
        set(0)
    }
}
export const backIndexHandler = (index: number, set: React.Dispatch<React.SetStateAction<number>>, array: any[]) => {
    set(index - 1)
    if (index === 0) {
        set(array.length - 1)
    }
}
