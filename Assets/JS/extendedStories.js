
document.addEventListener("DOMContentLoaded", () => {

const packageData = {
  
  myStory: {
    title: "My Story",
    content: `
      <p>
          I was first introduced to coding during my freshman year of high school in an 
          Intro to Programming course at Sidney High School. Starting with Python, I quickly 
          became fascinated by how software could solve real problems and create useful 
          tools from scratch. Over the next several years, I expanded into additional languages 
          including C++, Java, and C#, building a strong technical foundation under the guidance 
          of my instructor, Joe Spangler.
      </p>

      <p>
          During my junior year, I joined the Web Application Team through
          BPA (Business Professionals of America), where I began focusing on website development 
          using HTML, CSS, and JavaScript. Although I started as a beginner learning largely 
          on my own, I quickly developed a deep interest in creating functional, visually 
          appealing websites.
      </p>

      <p>
          Our team placed 10th in the nation, earning a trip to the BPA National Leadership 
          Conference in Chicago. The following year, we competed again and placed in the top 
          20 nationally, just short of advancing to the conference. These experiences pushed 
          me to take my skills further, dedicating much of my free time to learning how to 
          design and build more professional, efficient, and reliable websites.
      </p>

      <p>
          Today, that same curiosity and drive continue to guide my work as I help small 
          businesses establish a strong presence online.
      </p>

      <p>
          After beginning my studies at Wright State University in Computer Engineering 
          and Business, I started combining technical expertise with entrepreneurial 
          thinking — ultimately leading to the creation of Macias Web Forge.
      </p>

      <p>
           I have always been drawn to creating things and understanding how
           they work, especially when it comes to technology and its rapid 
           evolution. My experience in BPA strengthened my interest in web 
           development, showing me how lines of code could come together to 
           form intuitive, user-friendly digital experiences.
      </p>

      <p>
            My interest in business developed much earlier. Growing up, 
            I was fascinated by the professionalism, leadership, and 
            vision associated with building organizations — the idea 
            of creating something meaningful, leading others, and 
            presenting oneself with purpose. That fascination never faded.
      </p>

      <p>
            By combining my passion for technology with an equally strong 
            interest in business, I founded Macias Web Forge to design modern, 
            effective websites that help organizations communicate clearly, 
            operate efficiently, and compete in an increasingly digital world.
      </p>
    `
  },

    myPlans: {
    title: "My Plans for Macias Web Forge",
    content: `
      <p>
            Macias Web Forge was created with a long-term vision, but also with a clear understanding that 
            meaningful progress takes time. In the near term, my focus is on education, hands-on experience, 
            and steady improvement. As I continue studying Computer Engineering and Business, I am developing 
            both the technical skills and practical knowledge needed to build websites that are not only 
            functional, but reliable and professionally structured. 
      </p>

      <p>
            At this stage, my priority is helping small businesses and organizations establish a strong online 
            presence through well-built, maintainable websites. With each project, I aim to improve my process, 
            learn from real-world challenges, and deliver work that provides lasting value rather than quick 
            results. As my skills grow, I plan to incorporate more advanced features such as stronger performance 
            optimization, improved accessibility, enhanced security practices, and scalable designs that can 
            support long-term growth.
      </p>

      <p>
            Over time, I hope to expand Macias Web Forge beyond basic website development into broader technology 
            services. This may include ongoing site management, technical support, consulting, and other digital 
            solutions that help organizations operate more effectively. Looking further ahead, there is also the 
            possibility of incorporating hardware-related services and technology integration, allowing businesses 
            to rely on a single trusted partner for multiple technical needs.
      </p>

      <p>
            In the long term, I would like to see Macias Web Forge evolve into a structured organization rather than
            remaining a one-person operation. Building a capable team and developing sustainable systems would allow 
            the company to handle more complex projects while maintaining the quality and personal accountability that 
            define its work today. At the same time, I am open to gaining experience within larger corporations, where 
            I could learn from established professionals, contribute to major projects, and better understand how 
            large-scale organizations function.
      </p>

       <p>
            Ultimately, my goal is not rapid expansion or short-term success, but steady, meaningful growth. I want 
            Macias Web Forge to be known for professionalism, reliability, and thoughtful work — a company that earns
            trust over time and continues improving with each project. No matter how the future unfolds, the focus will 
            remain on building things carefully, learning continuously, and delivering work that genuinely helps the
            people and organizations I serve.
      </p>

      <p>
            Whether you’re launching your first website or improving an existing one, my goal is to provide dependable 
            solutions that grow with you over time.
      </p>
    `
  }
};

const modalOverlay = document.createElement("div");
modalOverlay.className = "modalOverlay";

modalOverlay.innerHTML = `
  <div class="modal">
    <button class="closeModal" aria-label="Close Modal">&times;</button>
    <h2 id="modalTitle"></h2>
    <div id="modalContent"></div>
  </div>
`;

document.body.appendChild(modalOverlay);

const modalTitle = modalOverlay.querySelector("#modalTitle");
const modalContent = modalOverlay.querySelector("#modalContent");
const closeModalBtn = modalOverlay.querySelector(".closeModal");


function openModal(packageKey) {
  modalTitle.textContent = packageData[packageKey].title;
  modalContent.innerHTML = packageData[packageKey].content;
  modalOverlay.classList.add("active");
}

function closeModal() {
  modalOverlay.classList.remove("active");
}

document.querySelectorAll("[data-package]").forEach(btn => {
  btn.addEventListener("click", () => {
    openModal(btn.dataset.package);
  });
});


// Close when clicking the X button
closeModalBtn.addEventListener("click", closeModal);

// Close when clicking outside the modal box
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Close modal with Escape key (professional UX)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

});
