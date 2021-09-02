function move(obj, attr, speed, target, callback) {
    clearInterval(obj.timer);
    // �ж�speed����
    //���0->800 speed>0 , ��� ���0<-800 speed<0 
    // ��ȡԪ�ص�ǰλ��
    var current = parseInt(getStyle(obj, attr));
    if (current > target) {
        speed = -speed;
    }
    // ��ִ�ж���������һ������timer
    obj.timer = setInterval(function () {
        // �����һ����ʱ��
        // ��ȡ�ɵ�ֵ
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        // ��Ԫ���˶���800��ֹͣ
        // �����ƶ����ж�newValue�Ƿ�С��target
        // �����ƶ����ж�newValue�Ƿ����target
        if ((speed > 0 && newValue > target) || (speed < 0 && newValue < target)) {
            newValue = target;
        }
        // ��ֵ��obj
        // ����ע��˴�attr
        obj.style[attr] = newValue + "px";
        if (newValue == target) {
            clearInterval(obj.timer);
            // ����ִ����ϣ����ûص�����
            callback && callback();
        }
    }, 30)
}
function getStyle(obj, name) {
    // if (getComputedStyle(obj, null)[name] == null) {
    //     return box1.currentStyle[name];
    // } else {
    //     return getComputedStyle(obj, null)[name];
    // } ��д�ģ� ie8������������
    // getComputedStyle �ұ���
    // window.getComputerStyle ������
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return box1.currentStyle[name];
    }

    return window.getComputedStyle ? getComputedStyle(obj, null)[name] : box1.currentStyle[name];
}