

export const get_elem_width_px = ( elem ) => {

    let result = 0;

    const widthWithPaddingAndBorder = elem.offsetWidth;

    const style = getComputedStyle( elem );

    const marginLeft = parseFloat( style.marginLeft );
    const marginRight = parseFloat( style.marginRight );

    result = widthWithPaddingAndBorder + marginLeft + marginRight;

    return result;

}