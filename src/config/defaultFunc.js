import { readproduct } from "../tools/slices/productSlice";
import store from "../tools/store";
import supabase from "./supabase/supabase"

export const callProduct = async()=>{
    const {error,data} = await supabase.from('final-matrix').select();
    if (error) {
        console.log(error);
    }else{
        store.dispatch((readproduct(data)));
    }   
}
