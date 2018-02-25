<template>
	<div class="video">
		<div class="video-wrapper">
			<div>
				<ul class="video-list">
					<li class="video-item" v-for="(item, index) in videos.data" :key="index" @click="playVideo(item)">
						<div class="img-wrapper">
							<img :src="item.coverUrl">
						</div>
						<div class="title">
							{{item.name}}
						</div>
						<div class="hot" v-if="item.hot">
							<i class="iconfont">&#xe7d9;</i>
						</div>
					</li>
				</ul>
				<div class="bottom-tip">
			        <span>{{loadTip}}</span>
			    </div>
			</div>
		</div>
		<player ref="player" :videoData="selectedVideo"></player>
	</div>
</template>

<script>
import player from '../video-player/player'
import BScroll from 'better-scroll'
	export default {
		data () {
			return {
				videos: [],
				selectedVideo: {},
				page: 1,
				bscroll: null,
				loadTip: '---上拉加载更多---'
			}
		},
		mounted () {
			this.getVideos();
			this.bscroll = new BScroll('.video-wrapper', {
			    probeType: 1,
			    click: true
			});
			this.bscroll.on('touchEnd', (position) => {
				if(position.y < (this.bscroll.maxScrollY - 30)) {
			    	if (this.loadTip === '---没有更多了---') return;
			    	this.loadTip = '加载中...';
			        this.page++;
			        this.getVideos();
			        this.loadTip = '---上拉加载更多---';
			        this.$nextTick(() => {
			        	this.bscroll.refresh()
			        });
			    }
			});
		},
		methods: {
			getVideos () {
				this.$http.post('/mock/videos', {page: this.page}).then(({data}) => {
					console.log('video', data);
					if (this.page===1) {
						this.videos = data;
					} else if (this.page === 2) {
						this.videos.data.push(...data.data);
					} else {
						this.loadTip = "---没有更多了---"
					}
				})
			},
			playVideo (data) {
				this.$refs.player.show();
				this.selectedVideo = data;
			}
		},
		components: {
			player
		}
	}
</script>

<style scoped lang="scss">
.video-wrapper {
	position: fixed;
	top: 120px;
	left: 0;
	right: 0;
	bottom: 0;
	.video-list {
		.video-item {
			position: relative;
			display: inline-block;
			width: 44%;
			height: 165px;
			margin: 0 0 10px 4%;
			border-radius: 6px;
			background: #fff;
			.img-wrapper {
				height: 80%;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.title {
				height: 20%;
				padding: 4px;
				box-sizing: border-box;
				font-size: 12px;
			}
			.hot {
				position: absolute;
				right: -4px;
				top: -6px;
				.iconfont {
					color: #FA7198;
				}
			}
		}
	}
	.bottom-tip {
		width: 100%;
	    height: 35px;
	    line-height: 35px;
	    text-align: center;
	    color: #777;
	    background: #f2f2f2;
	}
}
</style>