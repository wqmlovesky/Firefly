// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	video?: string;
	location?: string;
	locationUrl?: string;
	mood?: string;
	tags?: string[];
	avatar?: string;
	// 图片展示配置
	imageDisplay?: {
		type: "carousel" | "grid"; // 显示类型：轮播图或网格布局
		autoPlay?: boolean; // 是否自动播放（仅carousel模式），默认 true
		interval?: number; // 自动播放间隔（毫秒），默认 4000ms
		showIndicator?: boolean; // 是否显示位置指示器（仅carousel模式），默认 true
		showControls?: boolean; // 是否显示控制按钮（仅carousel模式），默认 true
	};
}

// 示例日记数据
const diaryData: DiaryItem[] = [
	{
		id: 1,
		content: "📍zhejiang丨浙江\n待定🗺️✨🤣",
		date: "2026-07-22T10:30:00Z",
		location: "待定",
		locationUrl: "https://j.map.baidu.com/cf/2M",
		images: [
			"",
		],
		tags: ["待定", "待定", "待定"],
		mood: "😊",
		imageDisplay: {
			type: "grid", // 'carousel' 轮播模式 | 'grid' 网格布局模式
			autoPlay: true,
			interval: 4000,
			showIndicator: true,
			showControls: true,
		},
	},
	{
		id: 1,
		content: "轮播示例",
		date: "2026-05-01T10:30:00Z",
		// location: "待定",
		locationUrl: "https://j.map.baidu.com/cf/2M",
		images: [
			"https://tc.alcy.cc/tc/20260429/91e113df15bffb3f8bdb26815a657eb2.webp",
			"https://tc.alcy.cc/tc/20260429/f24f72bb6ddd659014616eb988b17385.webp",
			"https://tc.alcy.cc/tc/20260429/64fd71741c204cf10b3f39c6a2c22216.webp",
			"https://tc.alcy.cc/tc/20260429/3203d4425f7c3c8704ecc63d59fad1be.webp",
		],
		tags: ["轮播示例"],
		mood: "😊",
		imageDisplay: {
			type: "carousel", // 'carousel' 轮播模式 | 'grid' 网格布局模式
			autoPlay: true,
			interval: 4000,
			showIndicator: true,
			showControls: true,
		},
	},
	{
		id: 2,
		content: "YouTube",
		date: "2026-05-01T10:30:00Z",
		// location: "YouTube示例视频",
		// locationUrl: "https://j.map.baidu.com/cf/2M",
		images: [],
		video: "https://www.youtube.com/embed/5gIf0_xpFPI?si=N1WTorLKL0uwLsU_",

		tags: ["YouTube"],
		mood: "😊",
	},
	{
		id: 2,
		content: "Bilibili",
		date: "2026-05-01T10:30:00Z",
		// location: "Bilibili示例视频",
		locationUrl: "https://j.map.baidu.com/cf/2M",
		images: [],
		video: "https://www.bilibili.com/video/BV1uzRjBAEjL?t=3.6",
		tags: ["Bilibili"],
		mood: "😊",
	},
];

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = [...diaryData].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	diaryData.forEach((item) => {
		if (item.tags) {
			item.tags.forEach((tag) => {
				tags.add(tag);
			});
		}
	});
	return Array.from(tags).sort();
};
