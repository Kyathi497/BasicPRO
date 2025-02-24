
import { CORE_CONCEPTS } from "../ComponentsList"; 

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((item) => (
            <li key={item.title}>
            <img src={item.image} alt={item.title}/>
             <h3>{item.title}</h3>
           <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
