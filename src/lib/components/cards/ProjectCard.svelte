<script>
    
    /**
	 * @type {any}
	 */
     export let title;
    
    /**
	 * @type {any}
	 */
     export let description;
    
    /**
	 * @type {any}
	 */
     export let imageURL;
    
    /**
	 * @type {any}
	 */
     export let id;
</script>

<div class="card">
    <a href="projects/{id}">
        <img src="{imageURL}" alt={title} />
    </a>
    <!-- src="https://placehold.co/128x128/000000/FFF/?text={title}"  -->
    <h2>{title}</h2>
    <p>{description}</p>
    <div class="card-buttons">
        <button><a href="projects/{id}">View Project</a></button>
    </div>
</div>