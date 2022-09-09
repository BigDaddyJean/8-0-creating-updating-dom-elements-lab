const firstSection = document.querySelector("section")
const postsContainer = document.querySelector(".posts");
const posts = Array.from(document.querySelectorAll(".posts article"));

firstSection.classList.add("featured")

const post = `
  <article>
    <img
      src="./images/paul-gilmore-unsplash.jpg"
      alt="Image of a mountain in front of a lake."
    />
    <h3>Stop Planning</h3>
    <p>
      You -- yes you! You're an over-planner, I can tell. It's time to stop
      planning so much and instead focusing on relaxing. Taking a break at all
      is so stressful these days; why add to the stress by overworking yourself?
    </p>
    <aside>
      <p>
        <span>
          <strong>Read Time:</strong> 4 Minutes
        </span>
        <a href="#">Read more...</a>
      </p>
    </aside>
  </article>`;

  postsContainer.insertAdjacentHTML("beforeend", post);

const firstPost = posts[0].innerHTML;
posts[0].innerHTML = posts[1].innerHTML;
posts[1].innerHTML = firstPost;
