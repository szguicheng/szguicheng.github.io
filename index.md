---
layout: default
---

## Research Interests

- Machine learning interatomic potentials (MLIPs) and model fine-tuning for atomistic simulations
- Computational studies of solid-state electrolytes and ion diffusion mechanisms
- Large-scale first-principles and high-throughput materials simulations
- Data-driven materials modeling and property prediction using machine learning

---

# Recent Research

## Machine Learning-Guided Design of Novel Solid-State Electrolytes for Li-ion Batteries

- Developed a hierarchical screening framework to evaluate over 600 pre-selected candidate electrolytes identified by preliminary heuristics, addressing the prohibitive cost of large-scale ab-initio calculations
- Integrated machine-learning interatomic potentials with density functional theory to compute key stability and performance descriptors, including energy above hull, phonon spectra, formation energies via molecular dynamics, band gaps, mechanical compatibility, and electrochemical stability windows
- Performed rigorous room-temperature validation using Longtime-MD, eliminating more than 98% of unsuitable candidates and advancing a refined set of promising structures—including chemically analogous substitutions—toward experimental verification, reducing anticipated experimental costs by orders of magnitude

<div class="carousel-container">
	<div class="carousel">
        <img src="/assets/img/paper/ScreeningProcess.png" class="carousel-img" style="display:none; height:200px; object-fit:contain;">
		<img src="/assets/img/paper/Li3YCl6_1ns_compare.png" class="carousel-img" style="display:none; height:150px; object-fit:contain;">
        <img src="/assets/img/paper/58CaCompare.png" class="carousel-img" style="display:none; height:300px; object-fit:contain;">
		<button class="carousel-arrow left">&#8592;</button>
		<button class="carousel-arrow right">&#8594;</button>
	</div>
</div>
<style>
.carousel-container { max-width: 480px; margin: 1.5em auto; position: relative; }
.carousel { position: relative; overflow: hidden; }
.carousel-img { width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px #0001; }
.carousel-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: #fff8; border: none; font-size: 2em; cursor: pointer; z-index: 2; padding: 0 0.3em; border-radius: 50%; }
.carousel-arrow.left { left: 8px; }
.carousel-arrow.right { right: 8px; }
.carousel-arrow:hover { background: #fff; }
</style>


<br>
<br>

## Benchmarking MLIP for Ion Migration Pathways in Battery Cathodes

- Developed a systematic benchmark to assess the reliability of machine-learning interatomic potentials (MLIPs) in predicting ion transport properties, focusing on migration pathways characterized by single-vacancy and divacancy mechanisms
- Performed nudged elastic band (NEB) calculations on representative crystalline cathodes to determine migration barriers, and conducted 50-ps molecular dynamics simulations at 800K and 1200K on disordered structures to capture temperature-dependent diffusion behavior
- Investigated how MLIP architecture, potential type, and training dataset composition influence prediction accuracy relative to DFT

<img src="/assets/img/paper/20250817-225141.jpeg" alt="Benchmarking MLIP for Ion Migration Pathways" style="max-width:100%; height:auto;">
<br>
<br>
## Modeling on Corrosion Performance of Low-Alloy Steel in Marine Atmospheric Environments

- Benchmarked multiple machine learning algorithms and identified gradient boosting decision trees (GBDT) as the most robust predictor of corrosion rate.
- Integrated particle swarm optimization (PSO) with GBDT to develop a hybrid prediction framework, reducing overall error by 13.05% compared to the best existing marine-atmosphere corrosion models, while maintaining a prediction accuracy of MAE $\leq 0.12\,\mu$m/yr on marine-exposure test sets
- Applied SHAP value analysis and accumulated local effects (ALE) visualization to elucidate nonlinear couplings among key factors such as Cl$^-$ concentration, alloy element segregation, and interfacial potential differences, quantitatively revealing for the first time how Mn/Cr co-addition and humidity–temperature synergy govern localized corrosion behavior

<div class="carousel-container">
	<div class="carousel">
		<img src="/assets/img/paper/pearson.png" class="carousel-img" style="display:block; height:200px; object-fit:contain;">
        <img src="/assets/img/paper/SHAP.png" class="carousel-img" style="display:none; height:200px; object-fit:contain;">
        <img src="/assets/img/paper/ALE.png" class="carousel-img" style="display:none; height:200px; object-fit:contain;">
		<button class="carousel-arrow left">&#8592;</button>
		<button class="carousel-arrow right">&#8594;</button>
	</div>
</div>
<style>
.carousel-container { max-width: 480px; margin: 1.5em auto; position: relative; }
.carousel { position: relative; overflow: hidden; }
.carousel-img { width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 8px #0001; }
.carousel-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: #fff8; border: none; font-size: 2em; cursor: pointer; z-index: 2; padding: 0 0.3em; border-radius: 50%; }
.carousel-arrow.left { left: 8px; }
.carousel-arrow.right { right: 8px; }
.carousel-arrow:hover { background: #fff; }
</style>


<br>
<br>

---

# Honors & Awards

- Third-Class Scholarship, People’s Scholarship, University of Science and Technology Beijing, 11/2021
- Outstanding Communist Youth League Cadre, University of Science and Technology Beijing, 11/2021
- Top Ten Model of Summer Social Practice, Advanced Individual, University of Science and Technology Beijing, 12/2021
- First Prize, Beijing, in the National College Students "Challenge Cup" Competition, Beijing Municipal Education Commission, 05/2021
- First Prize, Beijing, in the National College Students Computer Design Competition, Beijing Municipal Organizing Committee, 05/2021
- "Youth League 100th Anniversary—Outstanding Practice Star," University of Science and Technology Beijing, 04/2022
- Outstanding Graduation Thesis, University of Science and Technology Beijing, 06/2024



<script>
// 让每个轮播组件独立切换图片，保证每个轮播的第一张图片都能正常显示
document.querySelectorAll('.carousel').forEach(function(carousel) {
	var imgs = carousel.querySelectorAll('.carousel-img');
	var left = carousel.querySelector('.carousel-arrow.left');
	var right = carousel.querySelector('.carousel-arrow.right');
	var idx = 0;
	var timer = null;
	function show(i) {
		imgs.forEach(function(img, j) { img.style.display = (i === j) ? 'block' : 'none'; });
		idx = i;
	}
	function next() { show((idx + 1) % imgs.length); }
	function prev() { show((idx - 1 + imgs.length) % imgs.length); }
	left.onclick = function() { prev(); reset(); };
	right.onclick = function() { next(); reset(); };
	function reset() {
		clearInterval(timer);
		timer = setInterval(next, 3000);
	}
	timer = setInterval(next, 3000);
	show(0);
});
</script>