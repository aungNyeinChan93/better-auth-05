"use client";

import { authClient } from "@/lib/authClient";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ChangePasswordForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    console.log({ formData });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Example validation
      if (!formData.oldPassword || !formData.newPassword) {
        throw new Error("Please fill out both fields");
      }

      if (formData.newPassword.length < 6) {
        throw new Error("New password must be at least 6 characters");
      }

      await authClient.changePassword({
        currentPassword: formData.oldPassword,
        newPassword: formData.newPassword,
        fetchOptions: {
          onSuccess: (ctx) => {
            alert(JSON.stringify(ctx.data.user?.name, null, 2));
            authClient.signOut({
              fetchOptions: {
                onSuccess: () => {
                  setMessage("✅ Password changed successfully!");
                  return router.push("/auth/sign-in");
                },
              },
            });
          },
          onError: (err) => {
            setMessage(`❌ ${JSON.stringify(err)}`);
            // alert(JSON.stringify(err));
          },
        },
      });
      setFormData({ oldPassword: "", newPassword: "" });
    } catch (error: any) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-lg space-y-5"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Change Password
      </h2>

      {/* Old Password */}
      <div>
        <label
          htmlFor="oldPassword"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Old Password
        </label>
        <input
          type="password"
          name="oldPassword"
          id="oldPassword"
          value={formData.oldPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          placeholder="Enter old password"
        />
      </div>

      {/* New Password */}
      <div>
        <label
          htmlFor="newPassword"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          New Password
        </label>
        <input
          type="password"
          name="newPassword"
          id="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          placeholder="Enter new password"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
      >
        {loading ? "Changing..." : "Change Password"}
      </button>

      {/* Message */}
      {message && (
        <p
          className={`text-center text-sm ${
            message.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default ChangePasswordForm;
