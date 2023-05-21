export const ProfileCard = (props: ProfileCardProps) => {
  console.log(props);
  return (
    <div
      className={`flex bg-gradient-to-br from-[${props.colorFrom}] to-[${props.colorTo}] text-white rounded-xl`}
    >
      <div className="p-4">
        <h1 className="text-3xl font-bold">Profile Card</h1>
        <table>
          <tr>
            <td className="text-xl my-2 pr-5">Nickname</td>
            <td className="text-xl my-2">{props.name}</td>
          </tr>
          <tr>
            <td className="text-xl my-2 pr-5">Major</td>
            <td className="text-xl my-2">{props.major}</td>
          </tr>
          <tr>
            <td className="text-xl my-2 pr-5">Instagram</td>
            <td className="text-xl my-2">{props.instagram}</td>
          </tr>
        </table>
        <p className="text-lg text-gray-300 font-bold">
          Student @ Chulalongkorn University
        </p>
      </div>
    </div>
  );
};

type ProfileCardProps = {
  name: string;
  colorFrom: string;
  colorTo: string;
  major: string;
  instagram: string;
};
