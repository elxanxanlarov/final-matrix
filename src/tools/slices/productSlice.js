import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
import supabase from "../../config/supabase/supabase";

const productData = [];

const productSlice = createSlice({
    name: "products",
    initialState: productData,
    reducers: {
        readproduct: (state, action) => {
            return action.payload;
        },
        add: (state, action) => {
            const productadd = async () => {
                const { error } = await supabase.from('final-matrix').insert(action.payload);
                if (error) {
                    console.log(error);
                } else {
                    swal('Product add successfully', '', 'success');
                    setTimeout(() => {
                        window.location.assign("/dashboard");
                    }, 2000);
                }
            };
            productadd();
        },
        productremove: (state, action) => {
            const productdelete = async () => {
                const { error } = await supabase.from('final-matrix').delete().eq('id', action.payload);
                if (error) {
                    console.log(error);
                } else {
                    swal('Product was deleted', '', 'warning');
                    setTimeout(() => {
                        window.location.assign("/dashboard");
                    }, 2000);
                }
            };
            productdelete();
        },
        edit: (state, action) => {
            const productupdate = async () => {
                const { error } = await supabase.from('final-matrix').update(action.payload.data).eq('id', action.payload.id);
                if (error) {
                    console.log(error);
                } else {
                    swal('Product was edit!', '', 'warning');
                    setTimeout(() => {
                        window.location.assign("/dashboard");
                    }, 2000);
                }
            };
            productupdate();
        }
    }
});

export default productSlice.reducer;
export const { add, readproduct, productremove, edit } = productSlice.actions;
