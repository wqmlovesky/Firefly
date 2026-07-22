// 外部说说数据源配置（基于 GitHub Gist，完全免费）
// 数据存储在 GitHub Gist 中，通过 GitHub API 读写
// 添加新说说不会修改仓库中的任何代码

export const externalMomentsConfig = {
	// 是否启用外部说说数据源
	enable: true,

	// GitHub Gist ID（创建 Gist 后从 URL 中获取）
	gistId: "ee329e8726b8d77b68f23c602ae76f8c",

	// Gist 中的文件名
	fileName: "moments.json",

	// 默认作者信息
	defaultAuthor: "Damon",
	defaultAvatar:
		"https://pub-00fb2051f4fa476283169bfe78f43ead.r2.dev/19b3eb52d798517749101b7d8c65c24a.jpg",

	// 后台登录密码的 SHA-256 哈希（明文密码不再存入代码）
	// 生成方式：echo -n "你的密码" | abwfn123
	adminPasswordHash:
		"5236a2b68dd97c54cfe839c37b48e767ba67cd05b2d10140f5db7ad48761e2de",

	// GitHub Token（优先从环境变量 GITHUB_TOKEN 读取）
	// EdgeOne 部署时在环境变量中设置 GITHUB_TOKEN=你的token
	githubToken: process.env.GITHUB_TOKEN || "",
};
