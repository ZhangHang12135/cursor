const cursors = ['alias', 'all-scroll', 'auto', 'cell', 'col-resize', 'context-menu', 'copy', 'crosshair','default',
                'e-resize', 'ew-resize', 'grab', 'grabbing', 'help', 'move', 'n-resize', 'ne-resize', 'nesw-resize',
                'no-drop', 'none', 'not-allowed', 'ns-resize', 'nw-resize', 'nwse-resize', 'pointer', 'row-resize',
                'progress', 'row-resize', 's-resize', 'se-resize', 'sw-resize', 'text', 'unset', 'vertical-text',
                'w-resize', 'wait', 'zoom-in', 'zoom-out', '-webkit-grab', '-webkit-grabbing', '-webkit-zoom-in', '-webkit-zoom-out'];
const body = document.body;
for(let value of cursors) {
    let div = document.createElement('div');
    div.className = 'card';
    div.style.cursor = value;
    div.innerHTML = value;
    body.appendChild(div);
}