import Link from "./Link";
import { footer } from "../constants/footer";
import Input from "./Input";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="border-t border-second-color flex flex-col justify-center items-center">
      <div className="w-3/4 flex justify-between text-xs py-5 border-b border-second-color">
        {footer.map((group) => (
          <div key={group.id} className="space-y-0.5">
            <p className="font-medium text-sm mb-2">{group.name}</p>
            {group.links.map((link) => (
              <Link key={link.id} href={link.ref} content={link.content} />
            ))}
          </div>
        ))}
        <div>
          <p className="font-medium mb-2">Newsletter</p>
          <p className="text-gray-content mb-1">
            Subscribe for exclusive deals
          </p>
          <div className="flex gap-2">
            <Input placeholder="Email" />
            <Button content="Subscribe" />
          </div>
        </div>
      </div>
      <p className="text-gray-content text-xs p-5">
        © 2026 TechStore. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
