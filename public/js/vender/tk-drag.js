function allowDragover(ev){
    ev.preventDefault();//取消不允许拖动到其中的默认行为
}

function drag(ev){//设置被拖数据的数据类型和值
    ev.dataTransfer.setData("css-id",ev.target.id);
    ev.dataTransfer.setData("data-id",$(ev.target).data("id"));
//            console.log($(ev.target).data("id"));//获取纪录ID
}

function drop(ev){
    ev.preventDefault();
    var css_id=ev.dataTransfer.getData("css-id");//源
    $(ev.target).parent().after(document.getElementById(css_id));//移动

    var data_id = ev.dataTransfer.getData("data-id");//被移动纪录ID
    var target_data_id = $(ev.target).parent().data("id");//目标纪录ID
    console.log(data_id);
    console.log(target_data_id);
}