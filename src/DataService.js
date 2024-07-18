export const nodeTemplateData = [
    { label: 'Node A', image: 'src/assets/img/cloud.png' },
    { label: 'Node B', image: 'src/assets/img/host.png' },
    { label: 'Node C', image: 'src/assets/img/monitor.png' },
    { label: 'Node D', image: 'src/assets/img/monitor.png' },
    // 可以继续添加更多数据项
];

export const leftPanelConfig = {
    items: [
        {
            name: 'cloud',
            className: 'Node',
            iconHtml: `<img width="100%" style="padding:2px;" src="src/assets/img/cloud.png">`,
            imgSrc: "src/assets/img/cloud.png",
            attr: {
                text: 'cloud',
                imageSrc: 'src/assets/img/cloud.png'
            },
            styles: {
                font: 'bold 14px arial',
                border: '0px',
                color: 'black',
                backgroundColor: 'rgba(255,255,255,0.01)',
            }
        },
        {
            name: 'host',
            className: 'Node',
            iconHtml: `<img width="100%" style="padding:2px;" src="src/assets/img/host.png">`,
            imgSrc: "src/assets/img/host.png",
            attr: {
                text: 'host',
                imageSrc: 'src/assets/img/host.png'
            },
            styles: {
                font: 'bold 14px arial',
                border: '0px',
                color: 'black',
                backgroundColor: 'rgba(255,255,255,0.01)',
            }
        },
        {
            name: 'monitor',
            className: 'Node',
            iconHtml: `<img width="100%" style="padding:2px;" src="src/assets/img/monitor.png">`,
            imgSrc: "src/assets/img/monitor.png",
            attr: {
                text: 'monitor',
                imageSrc: 'src/assets/img/monitor.png'
            },
            styles: {
                font: 'bold 14px arial',
                border: '0px',
                color: 'black',
                backgroundColor: 'rgba(255,255,255,0.01)',
            }
        }
    ]
};
