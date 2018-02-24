<template>
	<div class="video">
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
		<player ref="player" :videoData="selectedVideo"></player>
	</div>
</template>

<script>
import player from '../video-player/player'
	export default {
		data () {
			return {
				videos: [],
				selectedVideo: {}
			}
		},
		mounted () {
			this.getVideos();
		},
		methods: {
			getVideos () {
				this.$http.get('/mock/videos').then(({data}) => {
					console.log('video', data);
					this.videos = data;
					console.log(this.videos)
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
</style>