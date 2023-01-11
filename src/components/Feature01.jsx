import { featureEditorDesktop } from "../assets";

const Feature01 = () => {
  return (
    <section className="flex flex-col items-center relative w-full overflow-hidden font-overpass text-dark-blue">
      <h1 className="absolute top-32 font-ubuntu font-bold text-4xl">
        Designed for the future
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center pl-36">
        <div>
          <div className="pb-14 pr-20">
            <h2 className="font-bold text-2xl pb-8">
              Introducing an extensible editor
            </h2>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="pr-20">
            <h2 className="font-bold text-2xl pb-8">
              Robust content management
            </h2>
            <p>
              Flexible content management enables users to easily move through
              post, increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you're in full control.
            </p>
          </div>
        </div>
        <img
          src={featureEditorDesktop}
          alt="feature editor"
          className="mr-[-240px] py-10"
        />
      </div>
    </section>
  );
};

export default Feature01;
