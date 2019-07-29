/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './Belief.css';

export default function Belief() {
  return (
    <main className={styles.Belief}>
      <section>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-4oHgOLZA-o" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        <article>
          <div>
            <h1>Fundamental Teachings</h1>
            <p>The teachings of Baha’u’llah are vast in their scope, exploring as they do such themes as the nature and purpose of Revelation, the inherent nobility of the human being, the cultivation of spiritual qualities, and humanity’s interactions with the natural world. The Bahá’í Writings are also replete with references to universal peace — “the supreme goal of all mankind” — as well as explanations of the social principles with which this peace is associated.</p>
            <p>Among these principles are</p>
            <ul>
              <li>Independent search after truth</li>
              <li>Oneness of the entire human race: The pivotal principle of the Bahá’í Faith</li>
              <li>Abolition of all forms of prejudice</li>
              <li>Harmony of science and religion</li>
              <li>Equality of men and women: The two wings on which the bird of humankind is able to soar</li>
              <li>Introduction of compulsory   education</li>
              <li>Adoption of a universal auxiliary language</li>
              <li>Abolition of the extremes of wealth and poverty</li>
              <li>Institution of a world tribunal for the adjudication of disputes between   nations</li>
              <li>Confirmation of justice as the ruling principle in human affairs</li>
            </ul>
            <p>Bahá’ís do not   view these principles as mere statements of vague aspiration—they are understood as matters of immediate and practical concern for individuals, communities, and institutions alike.</p>
          </div>
        </article>

        <article>
          <div>
            <h1>Progressive Revelation</h1>
            <p>Throughout the ages, God has sent Divine Messengers known as Manifestations of God — among them Abraham, Krishna, Zoroaster, Moses, Buddha, Jesus Christ, Muhammad and, in more recent times, the Báb and Bahá’u’lláh — to cultivate humanity’s spiritual, intellectual and moral capacities. Following the coming of a Manifestation of God extraordinary progress occurs in the world. Reaching to the roots of human motivation, His teachings awaken in whole populations capacities to contribute to the advancement of civilization to an extent never before possible.</p>
            <p>Today, we find ourselves at the threshold of the coming of age of the human race. Passing through different stages, we have collectively traversed our infancy and childhood. Around the world, human society is being reshaped, and the ultimate trend is clear: we are witnessing nothing less than the organization of human society as a planetary civilization.</p>
          </div>
        </article>
      </section>

      <aside>
        <h1>Additional Resources</h1>
        <ul>
          <li><a href="https://www.bahaullah.org/" target="_blank" rel="noopener noreferrer">The Life of Baha’u’llah</a></li>
          <li><a href="https://www.bahai.org/beliefs/god-his-creation/revelation/" target="_blank" rel="noopener noreferrer">Baha’u’llah's Life</a></li>
          <li><a href="http://reference.bahai.org/en/" target="_blank" rel="noopener noreferrer">Baha'i Reference Library</a></li>
          <li><a href="https://bahaiteachings.org/" target="_blank" rel="noopener noreferrer">Baha'i Teachings Site: Read Articles and Join the Conversation</a></li>
          <li><a href="https://media.bahai.org/" target="_blank" rel="noopener noreferrer">Baha'i Media Bank</a></li>
          <li><a href="http://bahaiblog.net/site/" target="_blank" rel="noopener noreferrer">Baha'i Blog</a></li>
          <li><a href="https://www.youtube.com/channel/UC34h-YWYOYwU1USZ6tttFUQ" target="_blank" rel="noopener noreferrer">Baha'i National Center Videos</a></li>
        </ul>

        <img alt="leaves of one tree" src="../../../dist/assets/leaves-one-tree.jpeg" />
        <img alt="progressive revelation" src="../../../dist/assets/progressive-revelation.jpeg" />
      </aside>
    </main>
  );
}
