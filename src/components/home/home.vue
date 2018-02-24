<template>
	<div class="home">
		<div class="top">
			<top-header @showSidebar="showSidebar"></top-header>
			<div class="nav">
				<ul>
					<li>
						<router-link to="/videos">视频</router-link>
					</li>
					<li>
						<router-link to="/images">图片</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="main">
			<router-view/>
		</div>
		<sidebar ref="sidebar"></sidebar>
		<transition name="maskShow">
			<div class="mask" v-show="sidebarMask" @click="closeSidebar"></div>
		</transition>
	</div>
</template>

<script>
import header from '../header/header'
import sidebar from '../sidebar/sidebar'
export default {
	data () {
		return {
			sidebarMask: false
		}
	},
	methods: {
		showSidebar () {
			this.$refs.sidebar.show();
			this.sidebarMask = true;
		},
		closeSidebar () {
			this.$refs.sidebar.hide();
			this.sidebarMask = false;
		}
	},
	components: {
		topHeader: header,
		sidebar
	}
}	
</script>

<style lang='scss' scoped>
.top {
	z-index: 999;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	background: #FA7198;
}
.main {
	margin-top: 116px;
}
.nav {
	margin-top: 10px;
	width: 100%;
	ul {
		display: flex;
		width: 100%;
		li {
			flex: 1;
			height: 40px;
			line-height: 40px;
			text-align: center;
			a {
				position: relative;
				color: #fff;
				&.router-link-active:after {
					position: absolute;
					left: 0;
					bottom: -4px;
					content: '';
					width: 100%;
					height: 2px;
					background: #fff;
				}
			}
		}
	}
}

.mask {
	&.maskShow-enter-active, &.maskShow-leave-active {
		transition: all .4s;
	}

	&.maskShow-enter, &.maskShow-leave-to {
		opacity: 0;
	}
	z-index: 9;
	position: fixed;
	left: 0;
	bottom: 0;
	top: 0;
	right: 0;
	background: #000;
	opacity: .5;
}
</style>