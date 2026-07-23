// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
	price?: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	数码: [
		{
			name: "三星S24 Ultra",
			image: "/images/device/sanxings24U.webp",
			specs: "钛黑色 / 12G + 256G",
			description: "创新设计，打造巅峰性能和超长续航",
			link: "https://www.samsung.com.cn/smartphones/galaxy-s24-ultra/",
			price: "0元",
		},
	],
	运动相机: [
		{
			name: "影石Insta360 Ace Pro 2",
			image: "/images/device/Insta360 Ace Pro 2.webp",
			specs: "极夜黑 / 街拍银灰",
			description: "AI双芯，旗舰影像",
			link: "https://store.insta360.com/cn/product/ace-pro-2?c=3611&from=nav_product",
			price: "2359元",
		},
		{
			name: "影石Insta360 Luna Ultra",
			image: "/images/device/Insta360 Luna Ultra.webp",
			specs: "创作者套装",
			description: "昼夜清晰，远近随心",
			link: "https://store.insta360.com/cn/product/luna-series",
			price: "4849元",
		},
		{
			name: "Osmo Pocket 4",
			image: "/images/device/Osmo Pocket 4.webp",
			specs: "标准套装",
			description: "一寸万象，光影随行",
			link: "https://www.dji.com/cn/osmo-pocket-4",
			price: "2999元",
		},
		{
			name: "Osmo Pocket 4P",
			image: "/images/device/Osmo Pocket 4P.webp",
			specs: "Vlog 套装",
			description: "灵眸成双，远见非凡",
			link: "https://store.insta360.com/cn/product/luna-series",
			price: "4299元",
		},
	],
	路由器: [
		{
			name: "MT3600BE",
			image: "/images/device/MT3600be.webp",
			specs: "WIFI7 / 2.5G",
			description: "GL·INET路由器MT3600BE",
			link: "https://item.jd.com/100230126321.html",
			price: "109元",
		},
	],
};
