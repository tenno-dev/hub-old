<script>
// @ts-nocheck

	// Import Swiper Svelte components
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
	import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

	import { onMount } from 'svelte';

	export let news = [];

	import { format, toDate } from 'date-fns';
	import { _ } from 'svelte-i18n'; // import translation function

	$: news.sort((a, b) => (b.id > a.id ? 1 : -1));
</script>

<div class="w-full h-auto border-transparent">
	<div
		v-if="nightwave && nightwave.DailyChallenges"
		class=" pr-4 pt-4 text-2xl font-bold bg-transparent text-primary sm:pr-6"
	>
		<div class="i-mdi-newspaper text-blue-400 text-2xl inline-block  align-middle mb-1" />

		News
	</div>
	<div class="border-transparent text-default">
		{#if !news && news.length === 0}
			<div class="text-primary">
				<div class="relative px-4 py-3 text-red-700 border border-red-400 rounded" role="alert">
					<strong class="font-bold">No News today</strong>
				</div>
			</div>
		{:else}
			<Swiper
				modules={[Autoplay, Pagination, A11y]}
				loop={true}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false
				}}
			>
				{#each news as item}
					<SwiperSlide>
						<div class="slide  min-w-full">
							<div
								class="mx-auto min-w-sm shadow-xl bg-contain h-80 cursor-pointer  bg-center bg-no-repeat "
								style="background-image: url({'https://cdn.tenno.dev/webp/' + item.imageLink})"
							>
								<div
									class="bg-black bg-opacity-20 items-end h-full  px-10 flex flex-wrap  hover:bg-opacity-75 transform duration-300"
								>
									<div class="pb-10">
										<h1 class="text-white text-2xl ">
											<a href={item.link}> {item.message}</a>
											<div class="w-16 h-2 bg-yellow-500 rounded-full my-2 " />
										</h1>
										<p class="text-white text-1xl">
											<a href={item.link}>
												{$_('posted')}: {format(new Date(item.date), 'dd.MMMM.yyyy HH:mm')}
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				{/each}
			</Swiper>
		{/if}
	</div>
</div>
