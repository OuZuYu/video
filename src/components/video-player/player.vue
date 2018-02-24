<template>
	<transition name="move">
		<div class="player" v-show="showFlag">
			<div class="top">
				<span class="back" @click="back"><</span>
				<h1 class="title">{{videoData.name}}</h1>
			</div>
			<video :src="videoData.videoUrl" controls width="100%" ref="videoPlayer" :poster="videoData.coverUrl"></video>
			<div class="desc">
				{{videoData.desc}}
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props: {
			videoData: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				showFlag: false
			}
		},
		methods: {
			show () {
				this.showFlag = true;
			},
			back () {
				this.showFlag = false;
				this.$refs.videoPlayer.pause();
			},
		}
	}
</script>

<style scoped lang="scss">
.player {
	&.move-enter-active, &.move-leave-active {
		transition: all .4s;
	}
	&.move-enter, &.move-leave-to {
		transform: translate3d(100%, 0, 0);
	}
	z-index: 9999;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #fff;
	overflow-y: auto;
	.top {
		z-index: 99999;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		display: flex;
		height: 46px;
		line-height: 46px;
		background: #FA7198;
		color: #fff;
		.back, .title {
			text-align: center;
		}
		.back {
			flex: 0 0 40px;
			font-size: 18px;
		}
		.title {
			flex: 1;
		}
	}
	.desc {
		height: 100px;
		overflow-y: auto; 
		background: #F1F1F1;
	}
}
</style>