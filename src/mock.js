import Mock from 'mockjs';

function video (op) {
	console.log(op.body);
	let page1 = {
		data: [
			{
				name: '测试视频',
				//videoUrl: 'http://p412fe7la.bkt.clouddn.com/smile.mov',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/iflove.mp4',
				coverUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg',
				hot: 1,
				desc: '这是视频描述哈哈哈哈哈'
			},
			{
				name: '测试视频',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/iflove.mp4',
				coverUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg',
				desc: '这是视频描述哈哈哈哈哈'
			},
			{
				name: '测试视频',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/iflove.mp4',
				coverUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg',
				desc: '这是视频描述哈哈哈哈哈'
			},
			{
				name: '测试视频',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/iflove.mp4',
				coverUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg',
				desc: '这是视频描述哈哈哈哈哈'
			},
			{
				name: '测试视频',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/iflove.mp4',
				coverUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg',
				desc: '这是视频描述哈哈哈哈哈'
			},
			{
				name: '测试视频',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/iflove.mp4',
				coverUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg',
				desc: '这是视频描述哈哈哈哈哈'
			},
			{
				name: '测试视频',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/iflove.mp4',
				coverUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg',
				desc: '这是视频描述哈哈哈哈哈'
			},
			{
				name: '测试视频',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/iflove.mp4',
				coverUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg',
				desc: '这是视频描述哈哈哈哈哈'
			}
		]
	}
	let page2 = {
		data: [
			{
				name: '第二页内容',
				//videoUrl: 'http://p412fe7la.bkt.clouddn.com/smile.mov',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/iflove.mp4',
				coverUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg',
				hot: 1,
				desc: '这是视频描述哈哈哈哈哈'
			},
			{
				name: '第二页内容',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/iflove.mp4',
				coverUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg',
				desc: '这是视频描述哈哈哈哈哈'
			},
			{
				name: '第二页内容',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/iflove.mp4',
				coverUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg',
				desc: '这是视频描述哈哈哈哈哈'
			},
			{
				name: '第二页内容',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/iflove.mp4',
				coverUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg',
				desc: '这是视频描述哈哈哈哈哈'
			},
			{
				name: '第二页内容',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/iflove.mp4',
				coverUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg',
				desc: '这是视频描述哈哈哈哈哈'
			},
			{
				name: '第二页内容',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/iflove.mp4',
				coverUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg',
				desc: '这是视频描述哈哈哈哈哈'
			},
			{
				name: '第二页内容',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/iflove.mp4',
				coverUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg',
				desc: '这是视频描述哈哈哈哈哈'
			},
			{
				name: '第二页内容',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/iflove.mp4',
				coverUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg',
				desc: '这是视频描述哈哈哈哈哈'
			}
		]
	}
	let page = JSON.parse(op.body).page;
	if (page === 1) {
		return page1;
	} else if (page === 2) {
		return page2;
	} else {
		return false;
	}
}
Mock.mock('/mock/videos', video);

function img () {
	let imgsData = {
		data: [
			{
				imgUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg'
			},
			{
				imgUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg'
			},
			{
				imgUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg'
			},
			{
				imgUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg'
			},
			{
				imgUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg'
			},
			{
				imgUrl: 'http://p412fe7la.bkt.clouddn.com/20170505094502_tRmHC.thumb.700_0.jpeg'
			}
		]
	}
	return imgsData;
}
Mock.mock('/mock/images', 'get', img);
