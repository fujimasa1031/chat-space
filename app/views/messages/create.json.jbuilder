json.array! @messages do |message|
  json.text message.text
  json.user_id message.user.id
  json.group_id message.group.id
  json.user_name message.user.name
  json.created_at message.created_at
  json.image message.image
end
