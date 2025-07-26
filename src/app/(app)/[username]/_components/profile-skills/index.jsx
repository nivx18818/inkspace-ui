function ProfileSkills({ skills }) {
  return (
    <>
      {skills.length > 0 && (
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
              >
                {skill.name || skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileSkills;
