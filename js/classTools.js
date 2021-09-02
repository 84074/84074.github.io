function addClass(obj, className) {
    if (!hasClass(obj, className)) {
        if (obj.className== "") {
            obj.className += className;
        } else {
            obj.className += " " + className;
        }
    }
}
function hasClass(obj, className) {
    var reg = new RegExp("\\b" + className + "\\b");
    // alert(reg);
    //\b���ʱ߽�
    return reg.test(obj.className);
}
function removeClass(obj, className) {
    var reg1 = new RegExp("\\b" + " " + className + "\\b");
    var reg2 = new RegExp("^" + className + "$");
    // ɾ��class
    // obj.className = obj.className.replace(reg1, "");
    if (reg2.test(obj.className)) {
        obj.className = obj.className.replace(reg2, "");
    } else {
        obj.className = obj.className.replace(reg1, "");
    }
}
function toggleClass(obj, className) {
    //���Ԫ���и��࣬��ɾ����û��������
    if (hasClass(obj, className)) {
        removeClass(obj, className);
    } else {
        addClass(obj, className);
    }
}