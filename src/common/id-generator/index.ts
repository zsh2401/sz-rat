export default function(){
    let id:number =  Math.ceil(Math.random()* 100000000);
    return "__random_tmp_id_" + id;
}