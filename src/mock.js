import Mock from 'mockjs';

function video () {
	let videosData = {
		data: [
			{
				name: '测试视频',
				videoUrl: 'http://p412fe7la.bkt.clouddn.com/smile.mov',
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
	return videosData;
}
Mock.mock('/mock/videos', 'get', video);

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
