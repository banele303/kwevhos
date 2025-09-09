'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCreative, Parallax } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'
import 'swiper/css/parallax'

const slides = [
		{
			id: 1,
			title: 'Welcome to Kwevhos Business Enterprise',
			content: 'Where expertise meets innovation. Your trusted partner for tailored business solutions.',
			image: '/pest10.jpeg',
		},
		{
			id: 2,
			title: 'Our Expertise',
			content: "We craft solutions that meet each client's unique needs and drive growth through optimized operations.",
			image: '/pest5.jpeg',
		},
		{
			id: 3,
			title: 'Featured Industry: Environmental',
			content: 'Delivering high-quality, sustainable solutions across environmental services.',
			image: '/pest6.jpeg',
		},
]

const HeroSlider = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [progressDeg, setProgressDeg] = useState(0)

		return (
			<div className="relative h-[80vh] overflow-hidden">
			<Swiper
				loop
			speed={1100}
				parallax
				effect={'creative'}
						creativeEffect={{
							prev: {
								translate: ['-30%', 0, -1],
								opacity: 0.85,
								scale: 0.88,
							},
							next: {
								translate: ['30%', 0, -1],
								opacity: 0.85,
								scale: 0.88,
							},
						}}
			autoplay={{ delay: 5500, disableOnInteraction: false }}
			pagination={{ clickable: true }}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
				onAutoplayTimeLeft={(_, __, progress) => {
					const deg = (1 - progress) * 360
					setProgressDeg(deg)
				}}
			modules={[Autoplay, Pagination, EffectCreative, Parallax]}
				className="h-full w-full"
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={slide.id}>
						<div className="relative h-full w-full">
							<div className="absolute inset-0" data-swiper-parallax="-20%">
												<div
													className="absolute inset-0"
													style={{
														transform: index === activeIndex ? 'scale(1.2)' : 'scale(1.08)',
														transition: 'transform 6s ease-out',
													}}
												>
																			<Image
																				src={slide.image}
																				alt={slide.title}
																				fill
																				priority={index === 0}
																				loading={index === 0 ? 'eager' : 'lazy'}
																				fetchPriority={index === 0 ? 'high' : 'auto'}
																				quality={90}
																				sizes="(min-width: 1024px) 120vw, 100vw"
																				style={{ objectFit: 'cover' }}
																			/>
									  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
									  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]" />
								</div>
							</div>

											<div className="relative h-full flex items-center justify-center px-6">
												{/* Decorative animated blobs */}
																<motion.div
													className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
																	animate={{ y: [0, -30, 0], x: [0, 22, 0], rotate: [0, 8, 0] }}
																	transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
												/>
																<motion.div
																	className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl"
																	animate={{ y: [0, 28, 0], x: [0, -26, 0], rotate: [0, -6, 0] }}
																	transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
												/>
																<motion.div
																	className="pointer-events-none absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl"
																	animate={{ y: [0, -18, 0], x: [0, 18, 0] }}
																	transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
																/>

												<div className="w-full">
													<AnimatePresence mode="wait">
																			<motion.div
															key={activeIndex}
																				className="mx-auto max-w-[80ch] text-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6 md:p-8 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
															data-swiper-parallax="-100"
																				initial={{ opacity: 0, y: 18, scale: 0.98 }}
																				animate={{ opacity: 1, y: 0, scale: 1 }}
																				exit={{ opacity: 0, y: -18, scale: 0.98 }}
																				transition={{ duration: 0.9, ease: 'easeOut' }}
														>
																					<motion.div
																className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs md:text-sm text-white/90"
																						initial={{ opacity: 0, y: 6 }}
																						animate={{ opacity: 1, y: 0 }}
																						transition={{ delay: 0.05, duration: 0.6 }}
															>
																<span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
																Trusted partner in environmental excellence
															</motion.div>

																					<motion.h2
																className="mt-4 text-3xl md:text-6xl font-extrabold leading-tight tracking-tight"
																						initial={{ opacity: 0, y: 12 }}
																						animate={{ opacity: 1, y: 0 }}
																						transition={{ delay: 0.1, duration: 0.9 }}
															>
																{slide.title}
															</motion.h2>

																					<motion.p
																className="mt-4 text-base md:text-2xl text-white/90"
																						initial={{ opacity: 0, y: 12 }}
																						animate={{ opacity: 1, y: 0 }}
																						transition={{ delay: 0.2, duration: 0.9 }}
															>
																{slide.content}
															</motion.p>

																					<motion.div
																className="mt-6"
																						initial={{ opacity: 0, y: 10 }}
																						animate={{ opacity: 1, y: 0 }}
																						transition={{ delay: 0.3, duration: 0.75 }}
															>
																<a
																	href="tel: +27634582860"
																							className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-700 hover:to-emerald-500 shadow-lg shadow-black/30 transition"
																							style={{ boxShadow: '0 10px 30px rgba(16, 185, 129, .35)' }}
																>
																	Call Us: +27 63 458 2860
																</a>
															</motion.div>

																					<motion.div
																className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
																						initial={{ opacity: 0 }}
																						animate={{ opacity: 1 }}
																						transition={{ delay: 0.35, duration: 0.9 }}
															/>

																					<motion.div
																className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-white/70"
																						initial={{ opacity: 0, y: 8 }}
																						animate={{ opacity: 1, y: 0 }}
																						transition={{ delay: 0.4, duration: 0.75 }}
															>
																<span className="rounded-full border border-white/20 bg-white/5 px-3 py-1">Since 2003</span>
																<span className="rounded-full border border-white/20 bg-white/5 px-3 py-1">Pest control specialists</span>
																<span className="rounded-full border border-white/20 bg-white/5 px-3 py-1">Gauteng, South Africa</span>
															</motion.div>
														</motion.div>
													</AnimatePresence>
												</div>
											</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="pointer-events-none absolute bottom-6 right-6 z-20 hidden md:block">
				<div
					className="h-12 w-12 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm grid place-items-center text-white text-[10px]"
					style={{
						background: `conic-gradient(rgba(255,255,255,.9) ${progressDeg}deg, rgba(255,255,255,.2) 0deg)`,
					}}
				>
					<div className="h-9 w-9 rounded-full bg-black/70 grid place-items-center">Auto</div>
				</div>
			</div>
		</div>
	)
}

export default HeroSlider
