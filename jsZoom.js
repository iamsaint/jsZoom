function jsZoom(qs) {
    var element = document.querySelector(qs),
        wrapper = document.createElement('div'),
        zoommed = document.createElement('img');

    element.style.width = '100%';
    wrapper.className = "zoomWrapper";
    wrapper.style.overflow = 'hidden';
    wrapper.style.position = 'relative';

    wrapper.addEventListener('mouseenter', function () {
        zoommed.style.opacity = 1;
    });

    function mousemove(e) {
        var left = e.clientX - wrapper.offsetLeft,
            top = e.clientY - wrapper.offsetTop

        zoommed.style.left = -1*left +'px';
        zoommed.style.top = -1*top + 'px';
    }
    wrapper.addEventListener('mousemove', mousemove);
    zoommed.addEventListener('mousemove', mousemove);

    wrapper.addEventListener('mouseleave', function () {
        zoommed.style.opacity = 0;
    });

    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);

    wrapper.appendChild(zoommed);
    zoommed.src = element.src;
    zoommed.style.position = 'absolute';
    zoommed.style.opacity = 0;
    zoommed.style.transition = 'opacity 0.2s, visibility 0s linear 0.2s';
}