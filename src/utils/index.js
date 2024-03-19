/**
 * Obtener el precio total de los productos
 * @param {any[]} products      cardProduct: Array de productos
 * @returns {number}            Total de los productos
 */
export const totalPrice = (products) => {
    return products.reduce((acc, item) => acc + item.price, 0);
}