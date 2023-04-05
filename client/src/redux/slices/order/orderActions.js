import { createAction } from "@reduxjs/toolkit";

export const addOrder = createAction("order/add");
export const removeOrder = createAction("order/remove");
export const increaseOrderQuantity = createAction("order/increaseQuantity");
export const decreaseOrderQuantity = createAction("order/decreaseQuantity");
