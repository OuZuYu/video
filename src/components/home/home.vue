<template>
	<div class="home">
		<top-header></top-header>
		<div class="nav">
			<ul>
				<li class="active">
					<router-link to="/videos">视频</router-link>
				</li>
				<li>
					<router-link to="/images">图片</router-link>
				</li>
			</ul>
		</div>
		<router-view/>
	</div>
</template>

<script>
import header from '../header/header'

export default {
	data () {
		return {

		}
	},
	components: {
		topHeader: header
	}
}	
</script>

<style lang='scss' scoped>
.home {
	background: #FA7198;
	color: #fff;
}
.nav {
	margin-top: 10px;
	
	ul {
		display: flex;
		li {
			position: relative;
			flex: 1;
			height: 40px;
			line-height: 40px;
			text-align: center;
			a {
				color: #fff;
			}
			&.active {
				&:after {
					position: absolute;
					left: 50%;
					transform: translate(-48%, 0);
					bottom: 2px;
					content: '';
					width: 22%;
					height: 2px;
					background: #fff;
				}
			}
		}
	}
}
</style>