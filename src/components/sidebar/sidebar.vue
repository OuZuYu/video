<template>
	<transition name="move">
		<div class="sidebar" v-show="showFlag">
			<p>咩</p>
			<p>都</p>
			<p>无</p>
			<p>，</p>
			<p>开</p>
			<p>发</p>
			<p>中</p>
		</div>
	</transition>
</template>

<script>
	export default {
		data () {
			return {
				showFlag: false
			}
		},
		methods: {
			show () {
				this.showFlag = true;
			},
			hide () {
				this.showFlag = false;
			}
		}
	}
</script>

<style scoped lang="scss">
.sidebar {
	&.move-enter-active, &.move-leave-active {
		transition: all .4s;
	}

	&.move-enter, &.move-leave-to {
		transform: translate3d(100%, 0, 0);
	}
	z-index: 99999;
	position: fixed;
	right: 0;
	top: 0;
	bottom: 0;
	left: 40%;
	background: #FAFAFA;
}
</style>