<template>
	<div class="header">
		<div class="user">
			<div class="avatar">
				<img src="http://p412fe7la.bkt.clouddn.com/avatar.jpg">
			</div>
			<div class="username">┽→氿櫳烏蠅哥﹏.</div>
		</div>
		<div class="meun" @click="showSidebar">
			<i class="iconfont">&#xe60f;</i>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			showSidebar () {
				this.$emit('showSidebar');
			},
		}
	}
</script>

<style lang='scss' scoped>
.header {
	position: relative;
	color: #fff;
	.user{
		padding: 20px 0 0 20px;
		.avatar {
			display: inline-block;
			width: 36px;
			height: 36px;
			vertical-align: middle;
			img {
				border-radius: 50%;
				width: 100%;
			}
		}
		.username {
			display: inline-block;
			vertical-align: middle;
			margin-left: 10px;
		}
	}
	.meun {
		position: absolute;
		right: 16px;
		top: 28px;
		.iconfont {
			font-size: 22px;
		}
	}
}

</style>