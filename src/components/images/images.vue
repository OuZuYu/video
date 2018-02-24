<template>
	<div class="images">
		<ul class="imgs-wrapper">
			<li v-for="(item, index) in imgsData.data" :key="index" class="img-item">
				<a :href="item.imgUrl"><img :src="item.imgUrl"></a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				imgsData: []
			}
		},
		methods: {
			getImgsData () {
				this.$http.get('/mock/images').then(({data}) => {
					console.log('imgsData', data);
					this.imgsData = data;
				})
			}
		},
		mounted () {
			this.getImgsData();
		}
	}
</script>

<style scoped lang="scss">
	.imgs-wrapper {
		.img-item {
			display: inline-block;
			width: 44%;
			height: 180px;
			margin: 10px 0 0 4%;
			border-radius: 6px;
			background: #fff;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>