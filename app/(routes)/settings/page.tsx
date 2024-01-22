import SettingsForm from "@/components/auth/settings-form";
import Sidebar from "@/components/sidebar";

const SettingsPage = () => {
  return (
    <div className="h-full">
      <Sidebar />
      <div className="sm:ml-72 flex justify-center">
        <SettingsForm />
      </div>
    </div>
  );
}
 
export default SettingsPage;